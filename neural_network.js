"use strict";

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
      // apply randon weights betw -1 & 1

    randomWeights(){

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random()* 2 -1;
            }

        }
    }
}