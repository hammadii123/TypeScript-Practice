"use strict";
// 🔹 Basic Questions
// 1️⃣ Write a function that takes two numbers as input and returns their sum. Make sure the parameters are of type number.
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(2, 5);
// 2️⃣ Create a variable userName of type string and assign it your name. Then print a welcome message using template literals.
var userName = "Hammad";
console.log(`Hellow ${userName}`);
// 🔹 Advanced Questions
// 3️⃣ Write a function that accepts an argument of type unknown. If it’s a string, return its length. If it’s a number, return its square. Otherwise, return null.
function a(letter) {
    if (typeof (letter) == "string") {
        return `String and its lenghth is : ${letter.length}`;
    }
    else if (typeof (letter) == "number") {
        return `${letter} is a Number and its double is : "${letter * 2}`;
    }
    else {
        return null;
    }
}
a("hammad");
// 4️⃣ Write a function that takes an optional parameter age of type number. If age is not provided, it should return "Age not specified", otherwise return "User is X years old".
function Age(age) {
    if (age) {
        console.log(`User is ${age} years old`);
    }
    else {
        console.log("Age is not provided");
    }
}
console.log(Age()); //'Age is not provided'
