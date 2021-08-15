var randomPhoneNumber = function () {
  var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
  var i = parseInt(10 * Math.random());
  var prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2');
}
var formatNumber = function (n) {
  return ('' + n)[1] ? n : '0' + n;
}
var formatTime = function (t) {
  return t.getFullYear() + '.' + formatNumber(t.getMonth() + 1) + '.' + formatNumber(t.getDate()) + ' ' + formatNumber(t.getHours()) + ':' + formatNumber(t.getMinutes()) + ':' + formatNumber(t.getSeconds());
}
export {
  randomPhoneNumber,
  formatTime
}