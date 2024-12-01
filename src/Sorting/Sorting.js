const fruits = ["Banana", "Ornage", "Apple", "Mongo"];
fruits.sort();

console.log(fruits);

const numbers = [1, 4, 5, 6, 3, 2, 0];
numbers.sort((a, b) => b - a); // decesing

console.log(numbers);

const users = [
  { name: "Jagdish", age: "15", rollNum: "10" },
  { name: "Kamlesh", age: "34", rollNum: "95" },
  { name: "Roshan", age: "31", rollNum: "15" },
  { name: "Roshan", age: "25", rollNum: "25" },
];

users.sort((a, b) => a.rollNum - b.rollNum);
users.sort((a, b) => a.age - b.age);

console.log(users);
