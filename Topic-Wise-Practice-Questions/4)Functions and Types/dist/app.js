"use strict";
// 🔹 Basic Questions
// 1️⃣ Create a function multiply that takes two numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(2, 4);


// 2️⃣ Write a function greetUser that takes a name and an optional age. If the age is given, return "Hello Ali, you are 25 years old." Otherwise, return "Hello Ali!".
function greetUser(name, age) {
    if (age) {
        return `Hello ${name} you are ${age} years old`;
    }
    else {
        return `Hello ${name}`;
    }
}
greetUser("Hammad");
greetUser("Hammad", 20);



// 🔹 Advanced Questions
// 3️⃣ Implement a function getDiscount that takes an amount (number) and a discount percentage (optional, default is 10%). The function should return the discounted price.
function getDiscount(amount, discount = 10) {
    return amount - (amount * discount) / 100;
}
console.log(getDiscount(100));
console.log(getDiscount(100, 20));
console.log(getDiscount(100, 30));



// 4️⃣ Write a function getUserInfo that supports two overloads:
// If given a number, it returns "User ID: 101"
// If given a string, it returns "Username: Ali"
function getInfo(param) {
    if (typeof (param) == "number") {
        return `User Id = ${param}`;
    }
    else {
        return `UserName = ${param}`;
    }
}
console.log(getInfo(3));
console.log(getInfo("hammadii"));
