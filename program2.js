/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map each Roman numeral to its corresponding integer value
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    // Traverse the string from left to right
    for (let i = 0; i < s.length; i++) {
        // If the current value is smaller than the next value, subtract it
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            // Otherwise, add it to the result
            result += romanMap[s[i]];
        }
    }
    
    return result;
};

module.exports = { romanToInt };
