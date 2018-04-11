var firstNumber;
var secondNumber;
while (isNaN(firstNumber) || firstNumber === '') {
    firstNumber = prompt("Please enter a number:");
    if (isNaN(firstNumber) || firstNumber === '')
        alert("The value entered must be a number. Please try again!")
    else
        firstNumber = Number(firstNumber);
}
while (isNaN(secondNumber) || secondNumber === '') {
    secondNumber = prompt("Please enter a second number:");
    if (isNaN(secondNumber) || secondNumber === '') 
        alert("The value entered must be a number. Please try again!")
    else
        secondNumber = Number(secondNumber);
}
var sum = (firstNumber + secondNumber).toFixed(2);
var product = (firstNumber * secondNumber).toFixed(2);
var difference = (firstNumber - secondNumber).toFixed(2);
var quotient = (firstNumber / secondNumber).toFixed(2);
alert("The sum of " + firstNumber + " and " + secondNumber + " is : " + sum + "\n" +
    "The difference between " + firstNumber + " and " + secondNumber + " is : " + difference + "\n" +
    "The product of " + firstNumber + " and " + secondNumber + " is : " + product + "\n" +
    "The quotient of " + firstNumber + " and " + secondNumber + " is : " + quotient + "\n");