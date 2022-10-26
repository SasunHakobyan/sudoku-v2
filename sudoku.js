const utils = require("./utils");

class Sudoku {
    constructor() {
        this.sudoku = [7, 8, 6, 2];
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
                console.log("RESET");
            }

            console.log(possibleNumbers);
            // this.sudoku[i] = possibleNumbers[randIndex];
        }
    }

    getPossibleNumbers(rowIndex, colIndex, boxIndex) {
        let numbersData = [1,2,3,4,5,6,7,8,9];

        let possibleNumbersData = numbersData.filter((number) => {
            return this.check(rowIndex, colIndex, boxIndex, number);
        });

        return possibleNumbersData;
    }

    check(rowIndex, colIndex, boxIndex, number) {
        
        function checkRow(rowIndex, number) {
            console.log(sudoku);
            for (let i = 0; i < sudoku.length; i++) {
                console.log(`IN ROW ${Math.floor(i/9)}`);
            }
            
            return true;
        }

        function checkCol(number) {
            return true;
        }

        function checkBox(number) {
            return true;
        }

        return checkRow(rowIndex, number) && checkCol(number) && checkBox(number);
    }

    fillSingleProbable(rowIndex, colIndex, boxIndex) {

    }
}

const sudoku = new Sudoku();
sudoku.generate();