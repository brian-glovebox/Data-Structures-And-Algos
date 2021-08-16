const twoSum = (arr, target) => {
    const hashTable = {};
    // The brute force solution is to do a nested for loop (O(n^2))
    // a more time efficient solution is to use a hash table
    // the hash table solution however is less space efficient

    for (let i = 0; i < arr.length; i++) {
        const sumMinusElement = target - arr[i];
        if (hashTable[sumMinusElement]) {
            return true;
        }
        hashTable[arr[i]] = true;
    }

    return false;
};