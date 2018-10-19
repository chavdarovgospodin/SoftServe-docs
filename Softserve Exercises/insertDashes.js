function insertDashes (n) {
    var result = n;
    for (let i =0;i<n.length;i++) {
        if(n[i] % 2===0) {
            result[i] += "-";
        }
    }
    return result;
}

console.log(insertDashes(45612))