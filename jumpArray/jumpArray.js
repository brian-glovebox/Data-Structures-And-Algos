function minJumps(arr, n) {

    // Base case: when source and
    // destination are same
    if (n == 1)
        return 0;
    // Traverse through all the points
    // reachable from arr[l]
    // Recursively, get the minimum number
    // of jumps needed to reach arr[h] from
    // these reachable points
    let res = Number.MAX_VALUE;
    for (let i = n - 2; i >= 0; i--) {
        if (i + arr[i] >= n - 1) {
            let sub_res = minJumps(arr, i + 1);
            if (sub_res != Number.MAX_VALUE)
                res = Math.min(res, sub_res + 1);
        }
    }

    return res;
}