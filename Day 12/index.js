// // object = A collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// object = {key:value,
// function()}

// const person1 = {
// firstName: "Spongebob",
// lastName: "Squarepants",
// age: 30,
// isEmployed: true,
// sayHello: function(){console.log("Hi! I am Spongebob!")},
// sayBye: function(){console.log("Goodbye!")}

// };

// const person2 = {
// firstName: "Patrick",
// lastName: "Star",
// age: 42,
// isEmployed: false,
// sayHello: () => console.log("Hey I'm Patrick ... "),
// sayBye: function(){console.log("Bye ... ")}

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// // this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

// const person1 = {
// name: "Spongebob",
// favFood: "hamburgers",
// sayHello: function(){console.log('Hi! I am ${this.name} )}

// person1.sayHello();


// super = keyword is used in classes to call the constructor or
// access the properties and methods of a parent (superclass)
// this = this object
// super = the parent


// class Animal{

// constructor(name, age){
// this.name = name;
// this.age = age;

// class Rabbit extends Animal{

// constructor(name, age, runSpeed) {
// super(name, age);
// this.runSpeed = runSpeed;

// class Fish extends Animal{

// constructor(name, age, swimSpeed){
// super(name, age);
// this. swimSpeed = swimSpeed;

// class Hawk extends Animal{

// constructor(name, age, flySpeed) {
// super(name, age);
// this.flySpeed = flySpeed;

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// hawk.flyk);