/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  for(i=0; i<s.length; i++){
    switch(s[i]){
      case '(':
        countSL++;
        break;
      case ')':
        countSR++;
        break;
      case '{':
        countML++;
        break;
      case "}":
        countMR++;
        break;
      case '[':
        countLL++;
        break;
      default:
        countLR++;
        break;
    }
}
};


module.exports={romanToInt}