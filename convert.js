var convert = function (number) {
  return number.toLocaleString("en-US", {style: 'currency', currency: 'USD'})
}

module.exports = convert;
