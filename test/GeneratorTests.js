/*jshint esversion: 6 */

gn = require('require-all')(__dirname + '/../generators');


const assert = require('assert');

it('Generate custom id', () => {
  // Arrange
  var g = new gn.BaseAlphaGenerator("xyz3456789");

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal("yx4z", g.Next());
});

it('Generate numerical id', () => {
  // Arrange
  // Arrange
  var g = new gn.NumericalGenerator();

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal(String(n), g.Next());
});


it('Generate alphabetical id', () => {
  // Arrange
  // Arrange
  var g = new gn.AlphabeticalGenerator();

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal("BOC", g.Next());
});
