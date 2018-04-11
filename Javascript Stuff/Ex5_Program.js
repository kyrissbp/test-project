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
checkDriverAge(userAge());

// Normal function
function checkDriverAge(age){
    if(age === 18)
        alert("CheckDriverAge: Congratulations on your first year of driving. Enjoy the ride!");
    else if(age > 110)
        alert("CheckDriverAge: Powering On. Please don't die in me!");
    else if(age > 18)
        alert("CheckDriverAge: Powering On. Enjoy the ride!");
    else
        alert("CheckDriverAge: Sorry, you are too young to drive this car. Powering off!");
}

// Yet another anon function
var checkDriverAge2 = function(age){
    var message;
    if(age === 18)
        message = "CheckDriverAge2: Congratulations on your first year of driving. Enjoy the ride!";
    else if(age > 110)
        message = "CheckDriverAge2: Powering On. Please don't die in me!";
    else if(age > 18)
        message ="CheckDriverAge2: Powering On. Enjoy the ride!";
    else
        message = "CheckDriverAge2: Sorry, you are too young to drive this car. Powering off!";
    console.log("The bonus for this is stupid and I'm not going to do it. Here is proof I can log to the console: \"" + message + "\"");
    return message;
}

// Do it again!
alert(checkDriverAge2(userAge()));
