class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    run() {
        this.observers.forEach(observer => {
            observer.generate();
        });
    }

    print() {
        this.observers.forEach(observer => {
            let rowStr = "";

            console.log("--------------------------");

            for (let i = 0; i < 81; i++) {
                rowStr += ` ${observer.sudoku[i]} `;
                
                if (rowStr.length == 27) {
                    console.log(rowStr);
                    rowStr = "";
                }
            }

            console.log("--------------------------");
        })
    }
}

module.exports = Observable;