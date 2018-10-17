function alhabetical(str) {
    var alphabet = str.toLowerCase()
        .split("")
        .sort()
        .join("");
    return alphabet;
}

console.log(alhabetical("habmlo"));