const { use } = require("react");

let fruits=['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry
console.log(fruits[4]); // Output: elderberry

fruits[1] = 'blueberry';
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date', 'elderberry']
fruits.push('fig');
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig']
fruits.pop();
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date', 'elderberry']
fruits.shift();
console.log(fruits); // Output: ['blueberry', 'cherry', 'date', 'elderberry']
fruits.unshift('avocado');
console.log(fruits); // Output: ['avocado', 'blueberry', 'cherry', 'date', 'elderberry']
let numberOfFruits = fruits.length;
console.log(numberOfFruits); // Output: 5
let citrusFruits = ['orange', 'lemon', 'lime'];
let allFruits = fruits.concat(citrusFruits);
console.log(allFruits); // Output: ['avocado', 'blueberry', 'cherry', 'date', 'elderberry', 'orange', 'lemon', 'lime']

for (let i = 0; i < allFruits.length; i++) {
    console.log(allFruits[i]);
}
// Output:
// avocado
// blueberry
// cherry
// date
// elderberry
// orange
// lemon
// lime
for (let fruit of allFruits) {
    console.log(fruit);
}

let numbers=[10, 20, 30, 40, 50];
let maximum=Math.max(...numbers);   
console.log(maximum); // Output: 50
let minimum=Math.min(...numbers);
console.log(minimum); // Output: 10
let username='developer';
let chars=[...username];
console.log(chars); // Output: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
let letters=[...username].join('-');
console.log(letters); // Output: d-e-v-e-l-o-p-e-r
let union=[...numbers,...username,"hello" ,"world",1,2,3,];
console.log(union); 
// Output: [10, 20, 30, 40, 50, 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 'hello', 'world', 1, 2, 3]