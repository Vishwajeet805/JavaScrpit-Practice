let username;
username =window.prompt("Enter your name:");
console.log(username);

document.getElementById("Myh1").textContent = "Hello " + username ;

document.getElementById("button").onclick = function() {
    let name = document.getElementById("text").value;
    alert("Hello " + name);
}

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);