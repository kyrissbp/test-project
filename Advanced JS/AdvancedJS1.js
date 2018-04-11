
//////////////// In case I need this:
var logToConsole = console.log.bind(console);


// let + const (scope)
/*
const player = 'Bill';
let experience = 100;
let wizardLvl = false;
var bsLvl = false;
logToConsole('outside_wiz',wizardLvl);
logToConsole('outside_bs',bsLvl);

if(experience > 90){
        let wizardLvl = true;  // Unlike var, only exists in the scope of the 'if'
        var bsLvl = true;
        logToConsole('inside_wiz',wizardLvl);
        logToConsole('inside_bs',bsLvl);
}
logToConsole('outside_again_wiz',wizardLvl);
logToConsole('outside_again_bs',bsLvl);
*/


////////////////// Destructuring
/*
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLvl: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLvl = obj.wizardLvl;

// This will do the same thing as the 1st 2 lines in the block of code above
const { player,experience } = obj; // 'const player and expereience from the object'
// Now const player and const experience will be availible as constants
let { wozerdLvl } = obj;
*/


///////////////////// Object property declaration

// Setting dynamic property names
/*
const name = 'john snow';
const obj = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}
logToConsole(obj);

const a = "Simon";
const b = true;
const c = {};

const obj2 = { 
    a,
    b,
    c
}
logToConsole(obj2);
*/

//////////////Template strings
/*
const name2 = "Bill";
const age = 34;
const pet = "Octopus";

const greeting = `Hello ${name2} you look like you are ${age + 10}. What a terrfying ${pet} you have there...`;
logToConsole(greeting);
*/

//////////////// Default args
function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you look like you are ${age + 10}. What a terrfying ${pet} you have there...`;
}

logToConsole(greet());
logToConsole(greet("Brandon", 35, "chicken"));

// Symbols
// Each one is unique... Not used much

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

logToConsole(sym2 === sym3);

//Arrow functions


const add = (a,b) => a + b;  // single line if only 1 return
// Same as
function add2(a,b){
    return a + b;
}
// or
const add3 = (a,b) => {
    return a + b;
}



logToConsole(add(1,2));
logToConsole(add2(1,2));

