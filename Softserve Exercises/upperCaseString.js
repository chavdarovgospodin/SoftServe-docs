function upperCaseString(string) {
    // var replace = str.replace(/ /g, "*");
    // for (let i = 0; i < replace.length; i++) {

    //     if (i === 0) {
    //         replace[i] = replace[i].toUpperCase();
    //         console.log(replace[i]);
    //     } else if (replace[i] === "*") {

    //         replace[i + 1] = replace[i + 1].toUpperCase();
    //         console.log(replace[i + 1]);
    //     }

    // }
    return string.toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");


}
console.log(upperCaseString("hello world"));