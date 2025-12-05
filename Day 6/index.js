const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    (myCheckBox.checked) ?
        subResult.textContent = "You have agreed to the terms and conditions." :
        subResult.textContent = "You have not agreed to the terms and conditions.";

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method.";
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    }
    else {
        paymentResult.textContent = "You have not selected a payment method.";
    }

};
let testScore = 33;
let letterGrade;

switch(true){
case testScore >= 90:
letterGrade = "A";
break;
case testScore >= 80:
letterGrade = "B";
break;
case testScore >= 70:
letterGrade = "C";
break
case testScore >= 60:
letterGrade = "D";
break;
default:
letterGrade = "F";

}
console.log(letterGrade);
let day = 2;

switch(day){
case 1:
console.log("It is Monday");
case 2:
console.log("It is Tuesday");
case 3:
console.log("It is Wednesday");
case 4:
console.log("It is Thursday");
case 5:
console.log("It is Friday");
case 6:
console.log("It is Saturday");
case 7:
console.log("It is Sunday");
default:
console.log(`${day} is not a day`);
}