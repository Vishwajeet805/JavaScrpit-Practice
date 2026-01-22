// CALLBACK HELL

// function task1(callback){
//     setTimeout(()=>{
//         console.log("Task 1 Completed");
//         callback();
//     },1000)
// }function task2(callback){
//     setTimeout(()=>{
//         console.log("Task 2 Completed");
//         callback();
//     },3000)
// }function task3(callback){
//     setTimeout(()=>{
//         console.log("Task 3 Completed");
//         callback();
//     },2000)
// }function task4(callback){
//     setTimeout(()=>{
//         console.log("Task 4 Completed");
//         callback();
//     },4000)
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All tasks Completed");
//             })
//         })
//     })
// })


// Instead of using Callback 
// We Use method chaining promisses

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 Completed");
        }, 2000)
    })
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 Completed");
        }, 2000)
    })
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 3 Completed");
        }, 2000)
    })
}
function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 4 Completed");
        }, 2000)
    })
}
function task5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 5 Completed");
        }, 2000)
    })
}
// task1().then(value => {
//     console.log(value);
//     return task2() 
//     })
//     .then(value => {
//         console.log(value);
//         return task3()
//     })
//     .then(value => {
//         console.log(value);
//         return task4()
//     })
//     .then(value => {
//         console.log(value);
//         return task5()
//     })
//     .then(value => {
//         console.log(value);
//         console.log("All tasks are completed");
//     })

//Async/Await

async function checktasks() {
    
    const task1result=await task1();
    console.log(task1result);
    const task2result=await task2();
    console.log(task2result);
    const task3result=await task3();
    console.log(task3result);
    const task4result=await task4();
    console.log(task4result);
    const task5result=await task5();
    console.log(task5result);
    console.log("ALl Done")
}
checktasks();