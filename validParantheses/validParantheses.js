const validParantheses = str => {
    const stack = [];
    const mapping = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let c of str) {
        if (mapping[c]) {
            if (stack.length === 0) return false;
            if (mapping[c] !== stack.pop()) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};