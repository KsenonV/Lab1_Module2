const multiplyTwoNumbers = (a, b) => a * b;
console.log(multiplyTwoNumbers(5, 8));
const constNumber = 22;
const constString = "Пример строки";
const constBoolean = true;
let letObject = { key: "value" };
let letArray = [1, 2, 3];
let letNull = null;
const constSymbol = Symbol("уникальный");
console.log(constNumber, constString, constBoolean, letObject, letArray, letNull, constSymbol);
const data = {
    id: 3,
    e1: null,
    e2: null,
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
