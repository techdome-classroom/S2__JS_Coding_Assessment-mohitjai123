/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

let total = 0; // Initialize the total value
let prevValue = 0; // Track the previous numeral's value
for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]]; // Get the integer value of the current numeral

    // If the current value is less than the previous value, subtract it
    // Otherwise, add it
    if (currentValue < prevValue) {
        total -= currentValue;
    } else {
        total += currentValue;
    }

    // Update the previous value for the next iteration
    prevValue = currentValue;
}

return total;
};


module.exports={romanToInt}