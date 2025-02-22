"use strict";
// 🔹 Basic Questions
// 1️⃣ Create a number[] array with 5 numbers and print the second element.

let numbers;
numbers = [3, 4, 52, 3, 5];
console.log(numbers[1]);

// 2️⃣ Define a tuple [string, number] to store a name and age, and print both values.

let tup = ["Hammad", 3];
console.log(tup[0], tup[1]);

// 🔹 Advanced Questions
// 3️⃣ Create a function that returns a tuple [string, number, boolean], representing a user’s name, age, and status (active/inactive).

function tup1() {
  return ["hamad", 3, true];
}
console.log(tup1());

// 4️⃣ Make an immutable (readonly) tuple [string, number, string] to store a book’s title, year of publication, and author. Try modifying a value and note the error.

let tup2 = ["Book Title", 2023, "Author Name"];
// tup2[0] = "New Title"; // Error: Index signature in type 'readonly [string, number, string]' only permits reading.
