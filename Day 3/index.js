// let username;
// username =window.prompt("Enter your name:");
// console.log(username);

// document.getElementById("Myh1").textContent = "Hello " + username ;

// Area and Circumference of Circle
const pi=3.1459;
document.getElementById("button").onclick = function() {
    let name = document.getElementById("text").value;
    let area = pi * name * name;
    document.getElementById("area").textContent = "Area is: " + Number(area);
    let circumference = 2 * pi * name;
    document.getElementById("circumference").textContent = "Circumference is: " + Number(circumference);}

