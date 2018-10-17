function palindrome(str) {
    var re = /[\W_]/g;
    var reversed = str.toLowerCase().replace(re, "");
    var reversedStr = reversed
        .split("")
        .reverse()
        .join("");
    return reversed === reversedStr;
}

console.log(palindrome("nope"));