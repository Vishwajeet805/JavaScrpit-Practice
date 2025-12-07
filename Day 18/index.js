// closure = A function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function.
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count} `);

    }
    return { increment }
}
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
function createGame(){

    let score = 0;
    
    function increaseScore(points){
score += points;
console.log(`+${points}pts`);
}
function decreaseScore(points){
score -= points;
console.log(`-${points}pts`);
}
function getScore(){
    return score;
}
return{increaseScore,decreaseScore,getScore}
}
const game=createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3)
console.log(`-${game.getScore()}pts`);


// // setTimeout() = function in JavaScript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);

// 11

function hello(){
    window.alert("hello");
}
setTimeout(()=> console.log("hello"),3000);


let timeoutId;

function startTimer(){
timeoutId = setTimeout(()=> window.alert("Hello"), 3000);
console.log("STARTED");

}

function clearTimer(){
clearTimeout(timeoutId);
console.log("CLEARED");
}