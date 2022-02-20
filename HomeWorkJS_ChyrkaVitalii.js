// JavaScript source code

// 1-�� ��������
let counter = {
    value: 0,
    initialValue: 0,
    next: function () {
        this.value++;
        return this; // ��� ����������� ������� ������� - ������������ ���� � ������� �� ����� � ������������ ��'���,
    },               // ���� � ��������� ��������� ����� ������� � ������� next, ��� �� next �� � ��'����� � ���������� ������-��������� ("����� ������ �� ������ �� �����))))")
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

// 2-�� ��������
const createUser = function (name, age) {
    return {
        name,
        age,
        toString: function () {
            return `${this.age}`; // ������� Sort �������� ������� � ������� �������� toString - � ������� �������� �������, ���� � ������ ��� �������� ����� �����
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
