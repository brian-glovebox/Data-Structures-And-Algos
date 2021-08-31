const flattenDict = (dict, key, output) => {
    // This is a space efficient approach
    // to this question, since only one output
    // object is created (not one per call stack).
    if (!output) output = {};

    for (let k in dict) {
        const combinedKey = key ? `${key}.${k}` : k;
        if (typeof dict[k] === "string") {
            output[combinedKey] = dict[k];
        } else {
            flattenDict(dict[k], combinedKey, output);
        }
    }

    return output;
};