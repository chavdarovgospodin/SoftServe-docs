function last(arr, n = arr.length - 1) {
    var lastElem = arr.slice(n - n + 1, n + 1);
    return lastElem;
}

console.log(last([7, 9, 0, -2]));