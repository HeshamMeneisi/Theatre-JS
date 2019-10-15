/*jshint esversion: 6 */

(function() {
  "use strict";

  var Seat = require('./Seat.js');

  const Left = "L";
  const Right = "R";

  class Row {
    constructor(nSeats, rightStart, id, cell_id_gen) {
      this.ID = id;
      this.mid = (nSeats - 1) / 2;
      this.rightStart = rightStart;
      this.nextXRight = rightStart;
      this.nextCenterRight = Math.ceil(this.mid);
      this.nextCenterLeft = this.nextCenterRight - 1;
      this.Seats = Array(nSeats);
      this.bookedCount = 0;
      this.AllBooked = false;
      for (i = 0; i < this.Seats.length; i++) {
        this.Seats[i] = new Seat(cell_id_gen.Next(), this, i < this.rightStart ? Left : Right);
      }
    }

    GetNextCenterSeat() {
      var seat = null;
      // Choose closest to center, unless taken (right priority)
      if (
        Math.abs(this.nextCenterLeft - this.mid) >= Math.abs(this.nextCenterRight - this.mid) &&
        this.nextCenterRight < this.Seats.length &&
        !this.Seats[this.nextCenterRight].Booked
      ) {
        seat = this.Seats[this.nextCenterRight];
        this.nextCenterRight += 1;
      } else if (this.nextCenterLeft >= 0) {
        seat = this.Seats[this.nextCenterLeft];
        this.nextCenterLeft -= 1;
      }

      return seat;
    }

    BookNext() {
      if (this.AllBooked) return null;

      var seat = null;

      // If left section is bigger than right
      if (
        this.nextCenterRight < this.rightStart &&
        this.nextXRight < this.Seats.length &&
        !this.Seats[this.nextXRight].Booked
      ) {
        // Must fill the whole right section first
        seat = this.Seats[this.nextXRight];
        this.nextXRight += 1;
      }
      // If left section is empty/non-existent, or right side is full/non-existent
      else if (this.nextCenterLeft >= this.rightStart || this.nextXRight >= this.Seats.length) {
        // Get closest to center regardless of section
        seat = this.GetNextCenterSeat();
      }
      // Otherwise, fill right
      else if (this.nextCenterRight < this.Seats.length) {
        seat = this.Seats[this.nextCenterRight];
        this.nextCenterRight += 1;
      }
      // Then left
      else if (this.nextCenterLeft >= 0) {
        seat = this.Seats[this.nextCenterLeft];
        this.nextCenterLeft -= 1;
      }


      seat.Book();
      this.bookedCount += 1;
      if(this.bookedCount >= this.Seats.length){
        this.AllBooked = true;
      }
      return seat;
    }

    ToString() {
      var sb = [];
      sb.Put(this.ID + "|\t");
      for (var seat in this.Seats) {
        sb.Put(seat.Orientation == Orientation.Left ? "<" : "");
        sb.Put(seat.Booked ? "X" : "O");
        sb.Put(seat.Orientation == Orientation.Right ? ">\t" : "\t");
      }
      return sb.join('');
    }
  }

  module.exports = Row;
})();
