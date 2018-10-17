function reverseNumb (num) {
    var a = num.toString();
    var x = a.split("").reverse().join("");
    var result = Number(x);
    console.log(result);
  
}

reverseNumb(5112);