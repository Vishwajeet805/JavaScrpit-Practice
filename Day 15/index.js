// nested objects = Objects inside of other Objects.
// Allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object

// Person{Address{}, ContactInfo(}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor(}}

const person = {
fullName: "Spongebob Squarepants",
age: 30,
isStudent: true,
hobbies: ["karate", "jellyfishing", "cooking"],
address: {
street: "124 Conch St.",
city: "Bikini Bottom",
country: "Int. Water"
}}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for(const property in person.address){
        console.log(person.address[property]);
}


class Person{
        constructor(namel,age,...address){
                this.namel=namel;
                this.age=age;
                this.address=new address(...address)
        };

}
class Address{
        constructor(street,city,state){
                this.street=street;
                this.city=city;
                this.state=state;
        }
}
const person1=new Person("han",12,"21","AB","Mp");

console.log(person1.address.state);


const fruits=[{n:"A",a:1,F:"11"},
              {n:"B",a:2,F:"22"},
              {n:"C",a:3,F:"33"},
              {n:"D",a:4,F:"44"},
              {n:"E",a:5,F:"55"}
]

console.log(fruits[2].F);
fruits.forEach(fruit=>console.log(fruit))