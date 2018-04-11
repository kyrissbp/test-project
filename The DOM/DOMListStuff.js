var button2 = document.getElementById("btnAddItem");
var newItemInput = document.getElementById("userInput");
var ul = document.getElementById("myList");
var removeButtons = document.getElementsByClassName("bRemove");

// Add item button handler
button2.addEventListener("click", addListAfterClick);

// Add item button handler
newItemInput.addEventListener("keypress", addListAfterKeypress);

// Cross off clicked item
ul.addEventListener("click",slashifyListItem);


// Button click event listener
var button = document.getElementById("bsButton");
button.addEventListener("click", function(){
    alert("You clicked the button!");
})



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

    // Create a new span
    var newSpan = document.createElement("span");
    newSpan.innerHTML = newItemInput.value + "\t";
    // Create a remove button and place it in the span
    var delButton = document.createElement("button");
    delButton.innerText = "Remove";
    delButton.setAttribute("class","bRemove");
    delButton.addEventListener("click",removeListItem);
    newSpan.appendChild(delButton);
    // A new list item
    var newLi = document.createElement("li");
    //newLi.appendChild(document.createTextNode(newItemInput.value));
    newLi.appendChild(newSpan);
    ul.appendChild(newLi);
    
    // Clear the text box
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


// Remove an item from the list
function removeListItem(event){
    event.target.parentElement.parentElement.remove();
}