function chessboard() {
    var str = " ";
    var str2 = "#";

    for (let i = 0; i < 7; i++) {
        if (str.length % 2 === 0) {
            str += " ";
            str2 += "#";
        } else {
            str += "#";
            str2 += " ";
        }
    }

    for (let i = 0; i <= 7; i++) {
        if (i % 2 === 0) {
            console.log(str);
        } else {
            console.log(str2);
        }
    }

}



Chessboard();