/*
constructor(parentId, model) {
    parentId && this.seParentId(parentId);
    model && this.setModel(model);
}

setModel(model) {
    if (this.model) {
        this.model.unsubscribe(showHtm)
    }
    this.model = model;
    if (model) {
        model.sub
    }
}

*/

class HtmlRenderer {
    constructor() {
        sudokus.forEach(sudoku => {
            sudoku.platforms = [];
        });
    }

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
                inputField.id = `id-${i}`;

                inputField.addEventListener("keypress", (e) => {
                    const sudokuId = document.querySelector(".checkBtn").id;

                    if (e.key == "Enter") {
                        if (sudokus[sudokuId].sudoku[i] == e.target.value) {
                            itemBox.classList.add("green");
                            setTimeout(() => {
                                itemBox.classList.remove("green");
                            }, 2000);
                        } else {
                            itemBox.classList.add("red");
                            setTimeout(() => {
                                itemBox.classList.remove("red");
                            }, 2000);
                        }
                    }
                })

                itemBox.appendChild(inputField);
            } else {
                itemBox.textContent = sudoku[i];
            }
            root.appendChild(itemBox);
        }
    }
}

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
                inputField.id = `id-${i}`;

                inputField.addEventListener("keypress", (e) => {
                    const sudokuId = document.querySelector(".checkBtn").id;

                    if (e.key == "Enter") {
                        if (sudokus[sudokuId].sudoku[i] == e.target.value) {
                            itemBox.classList.add("green");
                            setTimeout(() => {
                                itemBox.classList.remove("green");
                            }, 2000);
                        } else {
                            itemBox.classList.add("red");
                            setTimeout(() => {
                                itemBox.classList.remove("red");
                            }, 2000);
                        }
                    }
                })

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