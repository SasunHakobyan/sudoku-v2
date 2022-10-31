class ShowHtml {
    update(sudoku) {

        const root = document.getElementById("sudoku");
        root.innerHTML = "";
        
        for (let i = 0; i < 81; i++) {
            const itemBox = document.createElement("div");
            itemBox.classList.add("item-box");

            if (!sudoku[i]) {
                const inputField = document.createElement("input");
                inputField.setAttribute("type", "text");
                inputField.classList.add("number-input");
                inputField.id = `input-id-${i}`;
                itemBox.appendChild(inputField);
            } else {
                itemBox.textContent = sudoku[i];
            }
            root.appendChild(itemBox);
        }
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

        console.log("--------------------------");
    }
}

const sudokus = [];
let activeIndex = 0;

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
});

function switchSudoku(e) {
    let sudokuId = e.target.id.slice(-1);

    let dropBtn = document.getElementById("drop-btn");
    dropBtn.innerHTML = `Sudoku ${Number(sudokuId) + 1}`;
    
    sudokus[sudokuId].show();
}

function dropDownToggler() {
    document.getElementById("sudoku-list").classList.toggle("show");
}