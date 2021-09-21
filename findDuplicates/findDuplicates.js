const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElementa = tofindDuplicates(arry);
console.log(duplicateElements);

function toFindDuplicates(arry) {
    const uniqueElements = new Set(arry);
    const filteredElements = arry.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    return [...new Set(uniqueElements)]
}

const arry = [1, 2, 1, 3, 4, 3, 5];
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);

toFindDuplicates();

function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[arr[i]] = true;
    }

    if (resultToReturn) {
        console.log('Duplicate elements exist');
    } else {
        console.log('Duplicates dont exist ');
    }
}

function toFindDuplicates(element, index) {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) { // nested for loop
        for (let j = 0; j < arry.length; j++) {
            // prevents the element from comparing with itself
            if (i !== j) {
                // check if elements' values are equal
                if (arry[i] === arry[j]) {
                                                  
                    resultToReturn = true;
                    // terminate inner loop
                    break;
                }
            }
        }
        // terminate outer loop                                                                      
        if (resultToReturn) {
            break
        }
    }
    if (resultToReturn) {
        console.log('Duplicate elements exist');
    } else {
        console.log('Duplicates dont exist ');
    }
}

export function detectDuplicateResponses(responses) {
    let returnBool = false;
    const duplicateObj = {};

    for (let i = 0; i < responses.length; i++) {
        console.log(responses[i])
        const stringify = JSON.stringify(responses[i].votes)
        if (duplicateObj[stringify]) {
            returnBool = true
            return returnBool
        }
        duplicateObj[stringify] = true

    }
        return false;
    
}