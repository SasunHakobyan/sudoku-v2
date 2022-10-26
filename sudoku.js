const utils = require("./utils");

class Sudoku {
    constructor() {
        this.sudoku = [];
    }

    generate() {
        let possibleNumbers;
        let randIndex;
        let rowIndex, colIndex, boxRow, boxCol, boxIndex;

        for (let i = 0; i < 81; i++) {
            rowIndex = Math.floor(i/9);
            colIndex = i % 9;

            boxRow = Math.floor(rowIndex/3);
            boxCol = Math.floor(colIndex/3);
            boxIndex = boxCol + (boxRow * 3);

            possibleNumbers = this.getPossibleNumbers(rowIndex, colIndex, boxIndex);
            randIndex = utils.getRandomNumFromRange(0, possibleNumbers.length - 1);

            if (possibleNumbers.length == 0) {
                this.sudoku = [];
                i = -1;
            }

            this.sudoku[i] = possibleNumbers[randIndex];
        }
    }

    getPossibleNumbers(rowIndex, colIndex, boxIndex) {
        let numbersData = [1,2,3,4,5,6,7,8,9];

        let possibleNumbersData = numbersData.filter((number) => {
            return this.check(this.sudoku, rowIndex, colIndex, boxIndex, number);
        });

        return possibleNumbersData;
    }

    check(sudoku, rowIndex, colIndex, boxIndex, number) {
        
        // inside functions cant access to this.sudoku, defining sudoku for check functions

        function checkRow(rowIndex, number) {
            for (let i = 0; i < sudoku.length; i++) {
                if (Math.floor(i / 9) == rowIndex && sudoku[i] == number) {
                    return false;
                }
            }
            
            return true;
        }

        function checkCol(colIndex, number) {
            for (let i = 0; i < sudoku.length; i++) {
                if ((i % 9) == colIndex && sudoku[i] == number) {
                    return false;
                }
            }

            return true;
        }

        function checkBox(number) {
            return true;
        }

        return checkRow(rowIndex, number) && checkCol(colIndex, number) && checkBox(number);
    }

    fillSingleProbable(rowIndex, colIndex, boxIndex) {

    }
}

const sudoku = new Sudoku();
sudoku.generate();
console.log(sudoku.sudoku.length);

let rowStr = "";
for (let i = 0; i < 81; i++) {
    rowStr += ` ${sudoku.sudoku[i]} `;
    
    if (rowStr.length == 27) {
        console.log(rowStr);
        rowStr = "";
    }
}