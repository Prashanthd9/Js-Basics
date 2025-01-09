// let shoppingList = [
//   "Milk",
//   "Eggs",
//   "Bread",
//   ["Apples", "Bananas", "Oranges"],
//   ["Potatoes", "Tomatoes", "Onions"],
// ];
// console.log(shoppingList[0]);

// Push

// let shoppingList = [
//   "Milk",
//   "Eggs",
//   "Bread",
//   ["Apples", "Bananas", "Oranges"],
//   ["Potatoes", "Tomatoes", "Onions"],
// ];
// console.log(shoppingList);
// shoppingList.push("Carrots");

//POP

// let shoppingList = [
//   "Milk",
//   "Eggs",
//   "Bread",
//   ["Apples", "Bananas", "Oranges"],
//   ["Potatoes", "Tomatoes", "Onions"],
// ];
// console.log(shoppingList);
// shoppingList.pop;

//Splice

// let shoppingList = [
//   "Milk",
//   "Eggs",
//   "Bread",
//   ["Apples", "Bananas", "Oranges"],
//   ["Potatoes", "Tomatoes", "Onions"],
// ];
// console.log(shoppingList);
// shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");

//Fetching Specific Value

// let student = {
//   name: "Amit",
//   age: 20,
//   grade: "A",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "India",
//   },
// };

// console.log(student.name);

//Adding Value

// let student = {
//   name: "Amit",
//   age: 20,
//   grade: "A",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "India",
//   },
// };
// student.phone = "123456789";
// console.log(student);

//Removing Value

// let student = {
//   name: "Amit",
//   age: 20,
//   grade: "A",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "India",
//   },
// };
// delete student.grade;
// console.log(student);

//Modifying Value

// let student = {
//   name: "Amit",
//   age: 20,
//   grade: "A",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "India",
//   },
// };
// student.age = 21;
// console.log(student);

// Conditions

// function checkNumber(num) {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }
// console.log(checkNumber(5));
// console.log(checkNumber(-3));
// console.log(checkNumber(0));

let score = 59.5;
if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade D");
} else if (score < 60) {
  console.log("Grade F");
}
