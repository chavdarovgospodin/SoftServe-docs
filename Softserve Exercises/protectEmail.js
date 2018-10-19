function protectEmail (email) {
    var splited = email.split("_");
    var spl = splited[1].split("@");
    splited.pop();
    spl.shift();;
    spl.join();
    
    //var map = splited.map(x ="email");
    return splited + "...@" + spl;
}

console.log(protectEmail("robin_singh@example.com"));