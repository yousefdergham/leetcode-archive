/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (stack.length) {
            const last = stack[stack.length - 1];
            if (isPair(last, cur)) {
                stack.pop();
                continue;
            }
        }
        stack.push(cur);
    }

    return stack.length === 0;  
};

var isPair = function(last, cur) {
    return (
        (last === '(' && cur === ')') ||
        (last === '{' && cur === '}') ||
        (last === '[' && cur === ']')
    );
};