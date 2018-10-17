function count() {
    var a = 5;
    var b = 2;

    return a * b;
}

function takeAsArgument(b) {
    var a = 10;
    return b * a;
}

console.log(takeAsArgument(count()));