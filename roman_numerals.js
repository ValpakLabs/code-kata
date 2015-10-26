function getRomanNumeral(num) {
  var numerals = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
  ];

  if (num < 10) {
    return numerals[0][num];
  }

  else if (num < 100) {
    var twoNum = num.toString().split('');
    return numerals[1][twoNum[0]] +
           numerals[0][twoNum[1]];
  }

  else if (num < 1000) {
    var threeNum = num.toString().split('');
    return numerals[2][threeNum[0]] +
           numerals[1][threeNum[1]] +
           numerals[0][threeNum[2]];
  }

  else if (num < 3000) {
    var fourNum = num.toString().split('');
    return numerals[3][fourNum[0]] +
           numerals[2][fourNum[1]] +
           numerals[1][fourNum[2]] +
           numerals[0][fourNum[3]];
  }
}

module.exports = getRomanNumeral;
