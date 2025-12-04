// let username;
// username =window.prompt("Enter your name:");
// console.log(username);

// document.getElementById("Myh1").textContent = "Hello " + username ;

// Area and Circumference of Circle
const pi=3.1445;
let radii;
let area;
let circumference;
document.getElementById("button").onclick = function() {
    radii = document.getElementById("text").value;
    area = pi * radii * radii;
    area=Number(area);
    document.getElementById("area").textContent = "Area is: " + area +"cm²";
    circumference = 2 * pi * radii;
    circumference=Number(circumference);
    document.getElementById("circumference").textContent = "Circumference is: " +circumference+"cm";};

