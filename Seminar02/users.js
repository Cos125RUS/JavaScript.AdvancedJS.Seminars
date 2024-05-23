'use strict'

class User {
    #name = null;
    #surname = null;
    #age = null;

    constructor(name, surname, age) {
        this.#name = name;
        this.#surname = surname;
        this.#age = age;
    }

    get name() { return this.#name; }
    get surname() { return this.#surname; }
    get age() { return this.#age; }

    set name(value) { this.#name = value; }
    set surname(value) { this.#surname = value; }
    set age(value) { this.#age = value; }
}

class PremiumUser extends User {
    #premiumAccount = null;

    constructor(name, surname, age, year) {
        super(name, surname, age);
        // Пример: установите срок действия на год вперед
        this.#premiumAccount = new Date().setFullYear(new Date().getFullYear() + year);
    }

    get premiumAccount() { return new Date(this.#premiumAccount).toLocaleDateString(); }
}

// создать RegularUser
class RegularUser extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }
}

function getAccountInfo(user) {
    const date = user?.premiumAccount;
    if (user instanceof PremiumUser) console.log(`Премиум аккаунт действителен до ${date}`);
    else if (user instanceof RegularUser) console.log('Пользователь без премиум аккаунта')
    else console.log('Тип пользователя не определен');
}

const vipUser = new PremiumUser('Мажор', 'Мажоров', 45, 3);
const nonentityUser = new RegularUser('Отброс', 'Никчёмный', 27);
const unknownUser = new User('Непойми', 'Кто', 99);

getAccountInfo(vipUser);
getAccountInfo(nonentityUser);
getAccountInfo(unknownUser);
