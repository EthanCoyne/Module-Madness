var randomNumber = require('./randomNumber');
var convert = require('./convert');

var result = {
  money: function () {
    return convert(randomNumber(100, 1000000));
},
accountString: function () {
  return 'Account balance: \n';
  }
};




module.exports = result;
