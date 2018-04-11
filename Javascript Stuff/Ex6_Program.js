// Part 1
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
var show = function(){
    console.log(array);
    console.log("Array length: " + array.length);
}

// Log each step...
show();
array.shift();
show();
array.sort();
show();
array.push("Kiwi");
show();
array.shift();
show();
array.sort();
array.reverse();
show();

// Part 2 
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log("Part 2 answer: " + array2[1][1][0])


