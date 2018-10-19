function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    }
    return false;

}

console.log(isArray([1]));