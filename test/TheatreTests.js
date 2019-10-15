/*jshint esversion: 6 */

gn = require('require-all')(__dirname + '/../generators');
th = require('require-all')(__dirname + '/../theatre');

const assert = require('assert');

it('Book one seat', () => {
  // Arrange
  n = 3;
  m = 5;
  var s = new th.SeatGrid(n, m, Math.floor(m / 2), new gn.AlphabeticalGenerator(), new gn.NumericalGenerator());

  // Act
  s.Book(1);

  // Assert
  assert.equal(1, s.Rows[0].Seats.map(x => x.Booked).reduce((a, b) => a + b, 0));
});

it('Book all seats', () => {
  // Arrange
  n = 3;
  m = 5;
  var s = new th.SeatGrid(n, m, Math.floor(m / 2), new gn.AlphabeticalGenerator(), new gn.NumericalGenerator());

  // Act
  s.Book(n * m);

  // Assert
  assert.equal(n * m,
    s.Rows.map((r) => r.Seats.map(t => t.Booked).reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0));
});

it('Overbook the grid', () => {
  // Arrange
  n = 3;
  m = 5;
  var s = new th.SeatGrid(n, m, Math.floor(Math.floor(m / 2)), new gn.AlphabeticalGenerator(), new gn.NumericalGenerator());

  // Act
  var seats = s.Book(n * m + 100);

  // Assert
  assert.equal(n * m, seats.length);
});

it('Book a minimal 2x2 grid', () => {
  // Arrange
  var s = new th.SeatGrid(2, 2, 1, new gn.AlphabeticalGenerator(), new gn.NumericalGenerator());

  // Act
  var seats = s.Book(3);

  // Assert
  assert.deepEqual(["1", "0", "1"], seats.map(x => x.ID));
});


it('Book a row with no left section', () => {
  // Arrange
  var r = new th.Row(5, 0, "T", new gn.NumericalGenerator());
  var seats = [];

  // Act
  seats.push(r.BookNext());
  seats.push(r.BookNext());
  seats.push(r.BookNext());

  // Assert
  assert.deepEqual([
    "2",
    "3",
    "1"
  ], seats.map(x => x.ID));
});

it('Book a row with no right section', () => {
  // Arrange
  var r = new th.Row(5, 5, "T", new gn.NumericalGenerator());
  var seats = [];

  // Act
  seats.push(r.BookNext());
  seats.push(r.BookNext());
  seats.push(r.BookNext());

  // Assert
  assert.deepEqual([
    "2",
    "3",
    "1"
  ], seats.map(x => x.ID));
});

it('Book a row with no left section', () => {
  // Arrange
  var r = new th.Row(9, 7, "T", new gn.NumericalGenerator());
  var seats = [];

  // Act
  seats.push(r.BookNext());
  seats.push(r.BookNext());
  seats.push(r.BookNext());

  // Assert
  assert.deepEqual([
    "7",
    "8",
    "4"
  ], seats.map(x => x.ID));
});

it('Book in a general case (right then left)', () => {
  // Arrange
  n = 42;
  var r = new th.Row(n, n / 2, "T", new gn.NumericalGenerator());
  var seats = [];

  var sIDs = [];

  for (i = n / 2; i < n; i++)
    sIDs[i - n / 2] = String(i);

  for (i = 0; i < n / 2; i++)
    sIDs[i + n / 2] = String(n / 2 - i - 1);

  // Act
  for (i = 0; i < n; i++)
    seats.push(r.BookNext());

  // Assert
  assert.deepEqual(sIDs, seats.map(x => x.ID));
});
