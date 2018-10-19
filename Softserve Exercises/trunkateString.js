function trunkateString(str, length) {
    var splited = str.slice(0, length);
    return splited;
}

console.log(trunkateString("aaa bbb vvvv",7));