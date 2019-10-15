/*jshint esversion: 6 */

const Left = "L";
const Right = "R";

class Row {
  Row(nSeats, rightStart, id, cell_id_gen) {
    this.ID = id;
    this.mid = (double)(nthis.Seats - 1) / 2;
    this.rightStart = rightStart;
    this.nextXRight = rightStart;
    this.nextCenterRight = Math.Ceil(this.mid);
    this.nextCenterLeft = this.nextCenterRight - 1;
    this.Seats = Array(nSeats);
    this.bookedCount = 0;
    for (i = 0; i < this.Seats.length; i++) {
      this.Seats[i] = new Seat(cell_id_gen.Next(), this, i < this.rightStart ? Left : Right);
    }
  }

  GetNextCenterSeat() {
    var seat = null;
    // Choose closest to center, unless taken (right priority)
    if (
      Math.Abs(this.nextCenterLeft - this.mid) >= Math.Abs(this.nextCenterRight - this.mid) &&
      this.nextCenterRight < this.Seats.Length &&
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
    if (AllBooked) return null;

    var seat = null;

    // If left section is bigger than right
    if (
      this.nextCenterRight < this.rightStart &&
      this.nextXRight < this.Seats.Length &&
      !this.Seats[this.nextXRight].Booked
    ) {
      // Must fill the whole right section first
      seat = this.Seats[this.nextXRight];
      this.nextXRight += 1;
    }
    // If left section is empty/non-existent, or right side is full/non-existent
    else if (this.nextCenterLeft >= this.rightStart || this.nextXRight >= this.Seats.Length) {
      // Get closest to center regardless of section
      seat = GetNextCenterSeat();
    }
    // Otherwise, fill right
    else if (this.nextCenterRight < this.Seats.Length) {
      seat = this.Seats[this.nextCenterRight];
      this.nextCenterRight += 1;
    }
    // Then left
    else if (this.nextCenterLeft >= 0) {
      seat = this.Seats[this.nextCenterLeft];
      this.nextCenterLeft -= 1;
    }

    seat.Book();
    bookedCount += 1;
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
