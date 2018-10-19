function abbrevName (str) {
    var abbrev = str.split(" ").shift();
    var name = str.split(" ").pop().split("").shift() + "."
    return abbrev + " " + name;
}

console.log(abbrevName("Robin Singh"));