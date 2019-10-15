/*jshint esversion: 6 */

BaseAlphaGenerator = require('./BaseAlphaGenerator');

(function () {
"use strict";

class AlphabeticalGenerator extends BaseAlphaGenerator {
  constructor() {
    super("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
}

class NumericalGenerator {
  constructor(start = 0) {
    this.idx = start;
  }

  Next() {
    var next = this.idx;
    this.idx += 1;
    return String(next);
  }

  Reset() {
    this.idx = 0;
  }
}

module.exports = AlphabeticalGenerator;

})();
