"use strict";
// 📝 Practice Questions
// 🔹 Basic Questions
// 1️⃣ Create an object type for a "Book" with title (string), author (string), and pages (number).
let book = {
    titile: "Harry potter",
    author: "John",
    pages: 43
};
console.log(book);


// 2️⃣ Define an interface for a "Student" with name (string), age (number), and an optional grade (string).
let stud = {
    name: "Hammad",
    age: 20,
};
console.log(stud.age);




// 🔹 Advanced Questions
// 3️⃣ Create an Employee interface that extends Person and adds a salary (number). Define an object based on this interface.

let emp1 = {
    name: "Ali",
    salary: 30000
};
console.log(emp1);



// 4️⃣ Define an index signature interface for a "Config" object where keys are strings and values are numbers. Create an object using this interface.
const conf = {
    maxUsers: 30,
    minUsers: 10,
    timeOut: 20
};
console.log(conf);
