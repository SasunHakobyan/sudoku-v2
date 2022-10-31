class ShowHtml {
    update(sudoku) {

        const root = document.getElementById("sudoku");
        root.innerHTML = "";
        
        for (let i = 0; i < 81; i++) {
            const itemBox = document.createElement("div");
            itemBox.classList.add("item-box");
            itemBox.textContent = sudoku[i];
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

    console.log("On Click");

    sudoku.subscribe(showHTML);
    sudoku.generate();

    const dropDown = document.getElementById("sudoku-list");
    dropDown.innerHTML = "";

    for (let i = 0; i < sudokus.length; i++) {
        const dropItem = document.createElement("a");
        dropItem.classList.add("model");
        dropItem.id = `sudoku-${i}`;
        dropItem.innerHTML = `Sudoku ${i+1}`;
        dropItem.onclick = changeSudoku;

        dropDown.appendChild(dropItem);
    }
});

function changeSudoku(e) {
    let sudokuId = e.target.id.slice(-1);
    sudokus[sudokuId].show();
}

function dropDownToggler() {
    document.getElementById("sudoku-list").classList.toggle("show");
}