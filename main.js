const Sudoku = require("./sudoku");
const Observable = require("./observable");

const sudokuObservable = new Observable();

const sudoku1 = new Sudoku();
const sudoku2 = new Sudoku();

sudokuObservable.subscribe(sudoku1);
sudokuObservable.subscribe(sudoku2);

sudokuObservable.run();
sudokuObservable.print();