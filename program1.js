/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket, check for matching
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched; otherwise, they are not
    return stack.length === 0;

};

module.exports = { isValid };


