const Sudoku = require("./sudoku");

class ShowHTML {
    update(sudoku) {

    }
}

class ShowConsole {
    update(sudoku) {
        let str = "";
        for (let i = 0; i < 81; i++) {
            
            if (!sudoku[i]) {
                sudoku[i] = 0;
            }

            str += ` ${sudoku[i]} `;

            if (str.length == 27) {
                console.log(str);
                str = "";
            }
        }
    }
}

const sudoku = new Sudoku();
const showConsole = new ShowConsole(sudoku);
const showHTML = new ShowHTML(sudoku);

sudoku.subscribe(showConsole);
sudoku.subscribe(showHTML);

sudoku.generate();