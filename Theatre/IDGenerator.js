/*jshint esversion: 6 */

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
      i /= l;
    }
    sb.push(this.alphabet[i]);
    this.idx += 1;
    return sb.join('');
  }

  Reset() {
    this.idx = 0;
  }
}

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
