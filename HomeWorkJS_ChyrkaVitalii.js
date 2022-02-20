// JavaScript source code

// 1-ше завдання
let counter = {
    value: 0,
    initialValue: 0,
    next: function () {
        this.value++;
        return this; // при ланцюговому виклику функцій - викликаються лише ті функції які наявні в попередньому об'єкті,
    },               // тому й неможливо викликати якусь функцію з функції next, так як next не є об'єктом з вкладеними полями-функціями ("Навіть Кличко не сказав би краще))))")
    previous: function () {
        this.value--;
        return this;
    },
    reset: function () {
        this.value =
            this.initialValue;
        return this;
    },
    print: function () {

        console.log(this.value);
        return this;
    }
};

counter.next()
    .next()
    .print() // 2
    .reset()
    .print(); // 0  

// 2-ге завдання
const createUser = function (name, age) {
    return {
        name,
        age,
        toString: function () {
            return `${this.age}`; // функція Sort спочатку викликає в кожного елемента toString - і отримані значення порівнює, тому в даному полі залишили тільки число
        },
    }
}
let users = [
    createUser("John", 21),
    createUser("Tory", 18),
    createUser("Kate", 23),
    createUser("Pete", 22),
]

console.log(users[0].toString());

users = users.sort((a, b) => a - b);

console.log(users);
