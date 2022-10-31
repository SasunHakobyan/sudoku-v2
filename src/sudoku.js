class Sudoku {
    constructor() {
        this.sudoku = [];
        this.platforms = [];
        this.visibleSudoku = [];
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
            randIndex = getRandomNumFromRange(0, possibleNumbers.length - 1);

            if (possibleNumbers.length == 0) {
                this.sudoku = [];
                i = -1;
            }

            this.sudoku[i] = possibleNumbers[randIndex];
        }

        this.generateVisible();
        this.notifyAll();
    }

    generateVisible() {
        let startRange = 0;
        let endRange = startRange + 8;

        for (let i = 0; i < 9; i++) {

            let tempNums = [];

            for (let j = 0; j < 5; j++) {
                let index = getRandomNumFromRange(startRange, endRange);

                if (!tempNums.includes(this.sudoku[index])) {
                    tempNums.push(this.sudoku[index]);
                    this.visibleSudoku[index] = this.sudoku[index];
                } else {
                    j--;
                }
            }

            startRange = endRange + 1;
            endRange = startRange + 8;

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

    fillSudoku(number, index) {
        this.visibleSudoku[index] = number;
        this.notifyAll();
    }

    show() {
        this.notifyAll();
    }

    notifyAll() {
        return this.platforms.forEach(platform => platform.update(this.visibleSudoku));
    }

    subscribe(observer) {
        this.platforms.push(observer);
    }

    unsubscribe(observer) {
        this.platforms = this.platforms.filter(el => el !== observer);
    }
}

// module.exports = Sudoku;