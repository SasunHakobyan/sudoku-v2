class SudokuHtmlView {

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