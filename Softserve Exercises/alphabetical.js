function alhabetical (str) {
    var alphabet = str.toLowerCase()
        .split("")
        .sort();

    return alphabet.join("");
}

console.log(alphabetical("bca"));