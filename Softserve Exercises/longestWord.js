function longestWord(str) {
    var strSplit = str.split(" ");
    var counter = 0;
    var word = "";
    for (let i = 0; i < strSplit.length; i++) {
        if (counter < strSplit[i].length) {
            counter = strSplit[i].length;
            word = strSplit[i];
        }

    }
    console.log(counter, word);
}

console.log(longestWord("abcac2dsadsdas1 aa aaaa aaaaa111111 a"));