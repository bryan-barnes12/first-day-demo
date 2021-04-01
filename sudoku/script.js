let sudoku = {
    1: "", 2: "", 3: "", 4: "",
    5: "", 6: "", 7: "", 8: "",
    9: "", 10: "", 11: "", 12: "",
    13: "", 14: "", 15: "", 16: "",
}

console.log(sudoku);

function generateArray() {
    var i = "";
    for (i = 0; i < 4; i++) {
        sudoku[i + 1] = (i + 1);
    }
    var j = "";
    // for (j = 4; i < 9; j++) {
    //     sudoku[j + 1] = (j + 1);
    // }
    
   // var k = "";
}

generateArray();

console.log(sudoku);
