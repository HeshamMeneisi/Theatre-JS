/*jshint esversion: 6 */

(function () {
"use strict";

class BaseAlphaGenerator {
  constructor(alphabet) {
    this.idx = 0;
    this.alphabet = alphabet;
  }

  Next() {
    var sb = [];
    var i = this.idx;
    var l = this.alphabet.length;
    while (i >= l) {
      sb.unshift(this.alphabet[i % l]);
      i = Math.floor(i / l);
    }
    sb.unshift(this.alphabet[i]);
    this.idx += 1;
    return sb.join('');
  }

  Reset() {
    this.idx = 0;
  }
}

module.exports = BaseAlphaGenerator;

})();
