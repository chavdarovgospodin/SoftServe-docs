function countBs(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("ABBC"));

function countChar(str, n) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === n) {
            counter++;
        }

    }
    return counter;
}

console.log(countChar("abbaae", "e"));