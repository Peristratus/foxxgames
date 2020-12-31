"use strict";

class NeuralNetwork{
  constructor(numInputs, numHidden, numOutputs){
     this._hidden = [];
     this._numInputs = numInputs;
     this._numHidden = numHidden;
     this._numOutputs = numOutputs;
     this._weights0 = new Matrix(this._numInputs, this._numHidden);
     this._weights1 = new Matrix(this._numHidden, this._numOutputs);

     // randomise the initial weights
      this._weights0.randomWeights();
      this._weights1.randomWeights();
    }

     get hidden(){
        return this._hidden;
    }

    set hidden(hidden){
        this._hidden = hidden;
    }

    get weights0(){
        return this._weights0;
    }

    set weights0(weights){
        this._weights0 = weights;
    }

    get weights1(){
        return this._weights1;
    }

    set weights1(weights){
        this_.weights1 = weights;
    }

   feedForward(inputArray){
      // convert input array to a matrix
      let inputs = Matrix.convertFromArray(inputArray);

      //find the hidden value and apply the activation function
      this.hidden = Matrix.dot(inputs, this.weights0);
      this.hidden = Matrix.map(this.hidden, x => sigmoid(x));

      // find the output value and apply the activation function
      let outputs = Matrix.dot(this.hidden, this.weights1);
      outputs = Matrix.map(outputs, x => sigmoid(x));

      return outputs;

      // apply bias???

    }

    train(inputArray, targetArray) {
        // feed the input data through the network
        let outputs =this.feedForward(inputArray);
         console.log("outputs");
         console.table(outputs.data);

        // calculate the output errors (target-output)
        let targets = Matrix.convertFromArray(targetArray);
         console.log("targets");
         console.table(targets.data);

        let outputErrors = Matrix.subtract(targets, outputs);
         console.log("outputErrors");
         console.table(outputErrors.data);
         
         // calculate the deltas(errors * derivitive of the output)
         let outputDerivs = Matrix.map(outputs, x => sigmoid(x, true));
         let outputDeltas = Matrix.multiply(outputErrors, outputDerivs);
         console.log(" outputDeltas");
         console.table( outputDeltas.data);

         // calculate hidden layer errors (deltas "dot transpose of weight1")
         let weights1T = Matrix.transpose(this.weights1);
         let hiddenErrors = Matrix.dot(outputDeltas,weights1T);
          console.log("hiddenErrors");
          console.table(hiddenErrors.data);

        // calculate the hidden deltas (errors * derivitive of hidden)
         let hiddenDerivs = Matrix.map(this.hidden, x => sigmoid(x, true));
         let hiddenDeltas = Matrix.multiply(hiddenErrors, hiddenDerivs);
         console.log("hiddenDeltas");
         console.table( hiddenDeltas.data);

        // update the weights (add transpose of layers "dot" deltas)
        // update bias???
    }
}

function sigmoid(x, deriv = false){
    if (deriv){
        return x * (1 - x); // where x = sigmoid(x)
    }
    return 1 / (1 + Math.exp(-x));
}



// MATRIX FUNCTION

class Matrix {
   constructor (rows, cols, data = []){
      this._rows= rows;
      this._cols= cols;
      this._data= data;

      // initialize with zeros if no data provided

      if(data == null || data.length == 0){

        this._data = [];
        for (let i = 0; i < this._rows; i++){
            this.data[i]=[];
            for (let j = 0; j < this._cols; j++){
                this._data[i][j] = 0;

            }
        }
      } else {
          //check data integrity
          if(data.length != rows || data[0].length != cols){
              throw new Error("Incorrect data dimensions!")
          }
      }
   }
   
    get rows() {

        return this._rows;
    }

    get cols() {

        return this._cols;
    }

    get data() {

        return this._data;
    }

      // add two matrices 
      static add(m0, m1) {
            Matrix.checkDimensions(m0, m1)
            let m = new Matrix(m0.rows, m0.cols);
            for (let i = 0; i < m.rows; i ++){
                for (let j = 0; j < m.cols; j++) {
                     m.data[i][j] = m0.data[i][j] + m1.data[i][j];
                }
       
            }
              return m;
        }  

       // check matrices have the same dimensions

       static checkDimensions(m0, m1) {
          if (m0.rows != m1.rows || m0.cols != m1.cols){

            throw new Error ("Matrices of different dimentions!")
          }

       }

       // convetrt array to one-rowed matrix
        static convertFromArray(arr){
           return new Matrix(1, arr.length, [arr]);

        }

       //dot product of two matrices
        static dot(m0, m1){
            if(m0.cols != m1.rows){
                throw new Error("Matrices are not \"dot\"compatiable");
            }
              

            let m = new Matrix(m0.rows, m1.cols);
            for (let i = 0; i < m.rows; i ++){
                for (let j = 0; j < m.cols; j++) {
                     let sum = 0;
                        for (let k = 0; k < m0.cols; k++){
                          sum += m0.data[i][k] * m1.data[k][j];
                        }
                        m.data[i][j] = sum;
                 }
       
            }
            return m;
        }

        // apply a function to each cell of the given matrix

        static map(m0, mFunction) {
            let m = new Matrix(m0.rows, m0.cols);
            for (let i = 0; i < m.rows; i ++){
                for (let j = 0; j < m.cols; j++) {
                    m.data[i][j] = mFunction(m0.data[i][j]);
                }
            }
          return m;
        }

       // multiplying two matrices (not the dot product)
      static multiply(m0, m1) {
            Matrix.checkDimensions(m0, m1)
            let m = new Matrix(m0.rows, m0.cols);
            for (let i = 0; i < m.rows; i ++){
                for (let j = 0; j < m.cols; j++) {
                     m.data[i][j] = m0.data[i][j] * m1.data[i][j];
                }
       
            }
              return m;
        }  

    // subtract two matrices 
      static subtract(m0, m1) {
            Matrix.checkDimensions(m0, m1)
            let m = new Matrix(m0.rows, m0.cols);
            for (let i = 0; i < m.rows; i ++){
                for (let j = 0; j < m.cols; j++) {
                     m.data[i][j] = m0.data[i][j] - m1.data[i][j];
                }
       
            }
              return m;
        }  
       // find the transpose of the given matrix

       static transpose(m0){
          let m = new Matrix(m0.cols, m0.rows);
            for (let i = 0; i < m0.rows; i ++){
                for (let j = 0; j < m0.cols; j++) {
                     m.data[j][i] = m0.data[i][j];
                }
       
            }
              return m;
        }

      // apply randon weights betw -1 & 1
    randomWeights(){

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random()* 2 -1;
            }

        }
    }
}