/*jshint esversion: 6 */

(function() {
  "use strict";
  class Seat {
    constructor(id, row, orientation) {
      this.ID = id;
      this.Booked = false;
      this.Orientation = orientation;
      this.row = row;
    }

    Book() {
      this.Booked = true;
    }

    ToString() {
      return this.row.ID + ":" + this.ID;
    }
  }


  module.exports = Seat;
})();
