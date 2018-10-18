function checkIfString (str) {
    console.log(typeof str);
    if (typeof str === "string") {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkIfString(1));