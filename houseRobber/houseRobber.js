const maxStolenValue = houses => {
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];

    // store the best solution so far in an array
    const bestSolutions = [houses[0], Math.max(houses[0], houses[1])];

    for (let i = 2; i < houses.length; i++) {
        // the next best solution is either considering robbing the previous house,
        // which means taking the previous best solution (bestSolutions[i - 1]),
        // or by considering robbying the current house
        const nextBest = Math.max(
            houses[i] + bestSolutions[i - 2],
            bestSolutions[i - 1]
        );
        bestSolutions.push(nextBest);
    }

    return bestSolutions[bestSolutions.length - 1];
};