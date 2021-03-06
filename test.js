'use strict';
/* global describe, it */


const assert      = require('assert');
const unhomoglyph = require('./');
const data        = require('./data.json');


describe('unhomoglyph', function () {

  describe('should replace', function () {
    Object.keys(data).forEach(key => {
      it(`${key} => ${data[key]}`, function () {
        assert.strictEqual(unhomoglyph(`${key}`), `${data[key]}`);
      });
    });
  });

  it('shoult not touch ordinary strings', function () {
    assert.strictEqual(unhomoglyph('abc'), 'abc');
    assert.strictEqual(unhomoglyph(''), '');
  });

  it('should find multiple entries', function () {
    assert.strictEqual(unhomoglyph('1abcаа'), 'labcaa');
  });

});
