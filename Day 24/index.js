// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback);

const myBox = document.getElementById("mybox");
const myButton = document.getElementById("mybutton");
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";

});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 9";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me ";

});
myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";

});

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 9";
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me ";

});

const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    myBox.textContent = "hooo";
    myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "wooo";
    myBox.style.backgroundColor = "lightblue";
});
document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
});