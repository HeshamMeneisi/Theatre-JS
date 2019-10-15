/*jshint esversion: 6 */

(function () {
"use strict";

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

module.exports = NumericalGenerator;

})();
