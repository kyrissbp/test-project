// Advanced objects

// Objects are reference types (non-primative)
// Setting an object = to another object just references the intial obj

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

// Context vs scope
// Context = where we are within the object (this)

const obj4 = {
    a:function(){
        console.log(this);
    }
}

// Instantiation
class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
    }
}

const player1 = new Player("Gimli", "dwarf");
player1.introduce();


class Wizard extends Player{
     constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`Word, I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Bill', 'Necrochicken');
const wizard2 = new Wizard('Frank', 'Hotdogmancer');
wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();

////////////// ES7 - only 2 additions (works like .Contains())
console.log('Includes test:','Hello'.includes('o'));
const pets = ['cat', 'dog', 'marmoset'];
console.log('Array includes:',pets.includes('rhino'));

// Exponential operator
const square = (x) => x**2;
console.log('Squarification',square(10));

/////////////// ES8
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10) + 'soup');
// Can now end param list with comma i.e const fun = (a,b,c,) => console.log(b); 

//Object methods:

let obj = {
    username0:'satan',
    username1:'stan',
    username2:'porkroast'
};

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(entry => {
    console.log(entry);
});

console.log(
    Object.entries(obj).map(entry => {
    return entry[1] + entry[0].replace('username','');
}));