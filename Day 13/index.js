// static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created
// from that class (class owns anything static, not the objects)

// class User{

// static userCount = 0;

// constructor(username){
// this.username = username;
// User.userCount++;

// static getUserCount (){
// console.log('There are ${User.userCount} users online );

// sayHello(){
// console.log('Hello, my username is ${this.username} );

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// user1.sayHello();
// user2. sayHello();


// // inheritance = allows a new class to inherit properties and methods
// from an existing class (parent -> child)
// helps with code reusability

// class Animal{
// alive = true;

// eat(){
// console.log( This ${this.name} is eating );
// }
// sleep(){
// console.log('This ${this.name} is sleeping );

// }}}

// class Animal{ ·

// class Rabbit extends Animal{
// name = "rabbit";

// class Fish extends Animal{
// name = "fish";

// class Hawk extends Animal{
// name = "hawk";

// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep()

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if (newwidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    } 
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }  

    set height(newheight) {
        if (newheigth > 0) {
            this._height = newheight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }  
    get area(){
        return `${(this._height*this._width).toFixed(1)}cm`;
    
    }
}
const rectangle = new Rectangle(3,5);
rectangle.width=1000000;
rectangle.height="pizza";
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);