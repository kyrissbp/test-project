// Create a single user object
var user = {
    username: "user",
    password: "pw"
};

// Function to show stuff
var show = function (something) {
    console.log(something);
};

// Function create a new user object
var newUser = function (userName, pw) {
    return {
        username: userName,
        password: pw
    };
};

// Push out boring user to the poorly named 'database' array
var database = [];
database.push(user);
show(database);

// Create a newsfeed array with some users
var newsfeed = [newUser("Bill", "12deee")
                , newUser("Bob", "dfdsfsdfwe3434")
                , newUser("Fred", "yellow")];

show(newsfeed);