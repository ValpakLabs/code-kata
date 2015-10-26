var assert = require('assert');
var getRomanNumeral = require('../roman_numerals');

describe('getRomanNumeral', function() {
  it('should return a roman number', function() {
    assert.equal('I', getRomanNumeral(1));
  });
  it('should return the romanl numeral 4', function() {
    assert.equal('IV', getRomanNumeral(4));
  });
  it('should return the roman numeral 19', function() {
    assert.equal('XIX', getRomanNumeral(19));
  });
  it('should return roman numeral 40', function() {
    assert.equal('XL', getRomanNumeral(40));
  });
  it('should return roman numeral 72', function() {
    assert.equal('LXXII', getRomanNumeral(72));
  });
  it('should return roman numeral 543', function() {
    assert.equal('DXLIII', getRomanNumeral(543));
  });
  it('should return roman numeral 1943', function() {
    assert.equal('MCMXLIII', getRomanNumeral(1943));
  });
});
