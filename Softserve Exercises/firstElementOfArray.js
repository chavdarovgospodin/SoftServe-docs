function firstElementOfArray(arr, n = 1) {
    var firstElement = arr.slice(0, n);
    return firstElement;
}

console.log(firstElementOfArray([7, 9, 0, -2], 6));