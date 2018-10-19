function stringParameterize (str) {
    var param = str.toLowerCase().trim().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
    return param;
}

console.log(stringParameterize("Robin Singh from USA."));