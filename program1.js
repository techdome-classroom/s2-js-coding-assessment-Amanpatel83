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

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map[char]) {
            // If it's an opening bracket, push its corresponding closing bracket to the stack
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all opening brackets have been matched
    return stack.length === 0;
};

module.exports = { isValid };
