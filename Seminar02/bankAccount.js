class BankAccount {
    // Приватное свойство для хранения баланса
    #balance = 0;

    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(balance) {
        if (balance < 0) throw new Error("balance must be positive");
        this.#balance = balance;
    }

    // // Геттер для получения текущего баланса
    // set balance(balance) {
    //     if (balance < 0) throw new Error("balance must be positive");
    //     this.#balance = balance;
    // }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("amount must be positive");
        this.#balance += amount;
    }
    // Метод для внесения денег на счет

    // withdraw(amount) Метод для снятия денег со счета

    withdraw(amount) {
        if (amount <= 0) throw new Error("amount must be positive");
        if (amount < this.#balance)
            this.#balance -= amount;
        else throw new Error("balance must be positive");
    }
}

// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
// account.balance = 300;
console.log(account.balance); // Выводит: 500
account.deposit(200);
console.log(account.balance); // Выводит: 700
account.withdraw(100);
console.log(account.balance); // Выводит: 600