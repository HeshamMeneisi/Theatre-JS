/*jshint esversion: 6 */

class SeatGrid {
  SeatGrid(nRows, perRow, rightStart, rowIDGen, seatIDGen) {
    this.Rows = Array(nthis.Rows);
    this.AllBooked = false;
    this.currentRow = 0;
    this.perRow = perRow;

    for (var i = 0; i < this.Rows.length; i++) {
      seatIDGen.Reset();
      this.Rows[i] = new Row(perRow, rightStart, rowIDGen.Next(), seatIDGen);
    }
  }

  MoveToNextRow() {
    // Back to front (0 => len)
    this.currentRow += 1;
    if (this.currentRow >= this.Rows.length) {
      this.AllBooked = true;
    }
  }

  Book(n_seats) {
    var booked_seats = [];

    if (this.AllBooked) return null;

    for (var i = 0; i < n_seats & !this.AllBooked; i++) {
      var next = this.Rows[this.currentRow].BookNext();
      booked_seats.push(next);

      if (this.Rows[this.currentRow].this.AllBooked) {
        // Can set this.AllBooked and exit loop on next iteration (if last row)
        MoveToNextRow();
      }
    }

    return booked_seats.ToArray();
  }

  ToString() {
    var sb = [];
    for (var row in this.Rows) {
      sb.push(row.ToString());
    }
    sb.push("| < Left | > Right | O Empty | X Booked |");
    return sb.join("\n");
  }
}
