// Playing with anonymous function
var userAge = function(){
    var userAge
    while (isNaN(userAge) || userAge === '') {
        userAge = prompt("How old are you?");
        if (isNaN(userAge) || userAge === '')
            alert("That's not even a number. Try again.")
        else
            userAge = Number(userAge);
    }
    return userAge;
}

// Do the stuff
checkAge(userAge());

// Normal function
function checkAge(age){
    if(age === 18)
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    else if(age > 110)
        alert("Powering On. Please don't die in me!");
    else if(age > 18)
        alert("Powering On. Enjoy the ride!");
    else
        alert("Sorry, you are too young to drive this car. Powering off!");
}