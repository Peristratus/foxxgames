"use strict";

// MATRIX FUNCTION

class Matrix {
   constructor (rows, cols, data = []){
      this._rows= rows;
      this._cols= cols;
      this._data= data;

      // initialize with zeros if no data provided
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

}