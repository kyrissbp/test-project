// Just looking...
var byClassName = document.getElementsByClassName("second")[0];
var byID = document.getElementById("first");
console.log(byClassName);
console.log(byID);

// Selects 1st item
var qs = document.querySelector("h1");
console.log(qs);

qs = document.querySelector("li");
console.log(qs);
qs = document.querySelectorAll("li");
console.log(qs);

// Get/set attribute

var attribute = document.querySelector("li").getAttribute("random");
console.log(attribute);
document.querySelector("li").setAttribute("random", 45);
attribute = document.querySelector("li").getAttribute("random");
console.log(attribute);


// Changing style
var li = document.querySelector("li");
li.style.background = "blue"; // Yuck!
document.querySelectorAll("li")[2].style.background = "blue"; // Yuck!

var h1 = document.querySelector("h1");
h1.className = "crappyTitle";


li.classList.add("nasty");
li.classList.remove("nasty");
li.classList.add("done");
li.classList.toggle("done");

h1.innerHTML = "<strong>Awwww SNAP!</strong>";
var h1Parent = h1.parentElement;
console.log(h1Parent);

var ulKids = document.querySelector("ul").children;
var ulKidsParent = ulKids[0].parentElement;
console.log(ulKids);
console.log(ulKidsParent);

// Button click event listener
var button = document.getElementById("bsButton");
button.addEventListener("click", function(){
    alert("You clicked the button!");
})

var button2 = document.getElementById("btnAddItem");
var newItemInput = document.getElementById("userInput");
var ul = document.getElementById("myList");



//----------------------------------------------------------------------------

/*

// Add item button handler
button2.addEventListener("click", addListAfterClick);

// Add item button handler
newItemInput.addEventListener("keypress", addListAfterKeypress);

// Cross off clicked item
ul.addEventListener("click",slashifyListItem);



// Return true if the trimmed input string has a lenght greater than zero
function checkInputLength(){
    var len = newItemInput.value.trim().length;
    if(len > 0)
        return true;
    else
        return false;
}

// Adds a new item to the list
function addNewListItem(){
    var newSpan = document.createElement("span");
    newSpan.innerHTML = newItemInput.value + "\t";
    var delButton = document.createElement("button");
    delButton.innerText = "Remove";
    delButton.setAttribute("class","bRemove");
    newSpan.appendChild(delButton);
    var newLi = document.createElement("li");
    //newLi.appendChild(document.createTextNode(newItemInput.value));
    newLi.appendChild(newSpan);
    ul.appendChild(newLi);
    
    newItemInput.value = null;
}

// Add a li to list
function addListAfterClick(){
    if(checkInputLength())
        addNewListItem();
}

// Add a li to list following enter keypress
function addListAfterKeypress(event){
    if(checkInputLength() && event.keyCode === 13)
        addNewListItem();
}

// Toggles the 'done' style on and off when a li is clicked
function slashifyListItem(event){
    event.target.classList.toggle("done");
}

function addDeleteButton(){
    var delButton = document.createElement("button");
    delButton.innerText = "Remove";

    ul.appendChild(delButton);

    
}
*/