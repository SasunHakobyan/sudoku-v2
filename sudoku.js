const utils = require("./utils");

class Sudoku {
    constructor() {
        this.sudoku = [];
        this.sudokuSize = 9;
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

            // this.fillSingleProbable(rowIndex, colIndex, boxIndex, i);
            // if (this.sudoku[i]) {continue;}

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

        function checkBox(boxIndex, number) {
            for (let i = 0; i < sudoku.length; i++) {
                let currentRowIndex = Math.floor(i / 9);
                let currentColIndex = i % 9;

                let currentBoxRow = Math.floor(currentRowIndex / 3);
                let currentBoxCol = Math.floor(currentColIndex / 3);
                let currentBoxIndex = currentBoxCol + (currentBoxRow * 3);

                if (currentBoxIndex == boxIndex && sudoku[i] == number) {
                    return false;
                }
            }

            return true;
        }

        return checkRow(rowIndex, number) && checkCol(colIndex, number) && checkBox(boxIndex, number);
    }

    // Working without this
    fillSingleProbable(rowIndex, colIndex, boxIndex, i) {
        
    }
}

module.exports = Sudoku;