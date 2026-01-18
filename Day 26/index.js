// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes

let mybutton = document.querySelectorAll(".buton");

// ADD HTML/CSS PROPERTIES

mybutton.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += " Click me";
    button.addEventListener("click", event => {
        event.target.style.backgroundColor="yellow";
        event.target.style.padding="4rem";
    })
    button.addEventListener("dblclick", event => {
        event.target.style.backgroundColor="red";
        event.target.style.padding="1rem";
    })
    button.addEventListener("mouseover", event => {
        event.target.style.animation= "change-color-anim 5s linear infinite";
        event.target.style.padding="3rem";
    })
    button.addEventListener("mouseout", event => {
        event.target.style.animation= "change-color-anim 5s linear infinite ";
        event.target.style.padding="6rem";
    })
    
});
