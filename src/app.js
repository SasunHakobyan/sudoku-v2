const sudokus = [];

document.getElementById("addBtn").addEventListener("click", () => {
    const sudoku = new Sudoku();
    const showHTML = new ShowHtml(sudoku);
    const dropBtn = document.getElementById("drop-btn");

    sudoku.subscribe(showHTML);
    sudoku.generate();
    
    sudokus.push(sudoku);
    dropBtn.innerHTML = `Sudoku ${sudokus.length}`;

    const dropDown = document.getElementById("sudoku-list");
    dropDown.innerHTML = "";

    for (let i = 0; i < sudokus.length; i++) {
        const dropItem = document.createElement("a");
        dropItem.classList.add("model");
        dropItem.id = `sudoku-${i}`;
        dropItem.innerHTML = `Sudoku ${i+1}`;
        dropItem.onclick = switchSudoku;

        dropDown.appendChild(dropItem);
    }

    const checkBtn = document.getElementsByClassName("checkBtn")[0];
    checkBtn.id = sudokus.length - 1;
});

document.querySelector(".checkBtn").addEventListener("click", (e) => {
    const sudokuId = e.target.id;
    const sudoku = sudokus[sudokuId];

    const userInputs = document.getElementsByClassName("number-input");
    for (let userInput of userInputs) {
        const inputValue = Number(userInput.value);
        const inputSudokuNumIndex = userInput.id.split("-")[1];

        if (!(inputValue) || isNaN(inputValue)) {
            alert("Please fill all empty fields and valid data");
            break;
        }

        if (sudoku.sudoku[inputSudokuNumIndex] != inputValue) {
            alert("Not Passed");
            break;
        }
    }

    alert("PASSED");
})

function switchSudoku(e) {
    let sudokuId = e.target.id.slice(-1);

    let dropBtn = document.getElementById("drop-btn");
    dropBtn.innerHTML = `Sudoku ${Number(sudokuId) + 1}`;
    
    sudokus[sudokuId].show();

    const checkBtn = document.getElementsByClassName("checkBtn")[0];
    checkBtn.id = sudokuId;
}

function dropDownToggler() {
    document.getElementById("sudoku-list").classList.toggle("show");
}