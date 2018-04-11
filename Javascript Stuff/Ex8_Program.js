// Function expression to show stuff
var show = function (something) {
    console.log(something);
};

// Function expression to show all array stuff
var showAll = function(array){
    array.forEach(element => {
        show(element);
    });
}

// Function expression to create a new user object
var newUser = function (userName, pw) {
    return {
        username: userName,
        password: pw
    };
};

// Function expression to create a new newsfeed object
var newTimelinePost = function (userName, post) {
    return {
        username: userName,
        timeline: post
    };
};

// Instantiate some arrays
var database = [];
var newsFeed = [];
var multiBall = [];

// Shove both arrays in multiball so I can show them all at once
multiBall.push(database);
multiBall.push(newsFeed);

// Load up some data
multiBall[0].push(newUser("Brandon","pwd"), newUser("Jim","jim"));
multiBall[1].push(newTimelinePost(database[0].username,"I feel like social!")
                 ,newTimelinePost(database[0].username,"Nope, nevermind..."));

// Log those arrays to the console
//showAll(multiBall);

var userNamePrompt = prompt("Enter your username:");
var pwPrompt = prompt("Enter your password:");
showAll(userSignIn(userNamePrompt, pwPrompt, multiBall));

// Sign a user in
function userSignIn(user, pw, data){
    var entries = [];
    var userFound = false;
    data[0].forEach(element => {
        if(element.username === user && element.password === pw){
            userFound = true;
            data[1].forEach(post => {
                if(post.username === element.username){
                    entries.push(post);
                }
            });
            if(entries.length > 0){
                alert("Hello " + user + "! Login successful!")
                return entries;
            }
            else{
                alert("Hello " + user + "! Login successful! Your Newsfeed is empty!");
                return entries;
            }
        }
    });
    if(!userFound)
        alert("Sorry, user not found! Username or password may be incorrect.");
    return entries;
}



