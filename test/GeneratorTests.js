/*jshint esversion: 6 */

const assert = require('assert');

it('Should generate custom id', () => {
  // Arrange
  var g = new BaseAlphaGenerator("xyz3456789");

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal("yx4z", g.Next());
});

it('Should generate numerical id', () => {
  // Arrange
  // Arrange
  var g = new NumericalGenerator();

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal(n.ToString(), g.Next());
});


it('Should generate alphabetical id', () => {
  // Arrange
  // Arrange
  var g = new AlphabeticalGenerator();

  // Act
  n = 1042;
  for (i = 0; i < n; i++) {
    g.Next();
  }

  // Assert
  assert.equal("BOC", g.Next());
});
