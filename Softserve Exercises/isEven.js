function isEven(num) {
    var even = true;
    var odd = false;

    if (num == 1) {
        return false;
    } else if (num == 0) {
        return true;
    }
    else if (num == -1) {
        return false;
    } else {
        return isEven(num - 2);
    }

}

console.log(isEven(0));