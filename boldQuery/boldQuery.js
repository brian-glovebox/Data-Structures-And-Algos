function highlightResult(query, result) {
    let highlightedResult = [];
    // build highlighted version of result
    const splitArray = result.split(" ")
    for (let i = 0; i < splitArray.length; i++) {
        let element = splitArray[i];
        if (element.includes(query)) {
            element = element.replaceAll(query, `<b>${query}</b>`);
        }
        highlightedResult.push(element)
    }
    return highlightedResult.join(" ");
};