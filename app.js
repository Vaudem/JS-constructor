function UserMood(state) {
	this.state = state;
};

function User(name) {
	this.name = name;
	this.mood = new UserMood("neutral");

};

User.prototype.setMood = function(state) {
	this.mood = new UserMood(state);
};


var user1 = new User("gui");


console.log(user1);
console.log(user1.mood.state);
user1.setMood("happy");
console.log(user1.mood.state);


// var UserMood1 = new UserMood("Aïcha", "confused");
// console.log ( "Today, " + UserMood1.name + " is "+ UserMood1.mood + ".");

// var UserMood2 = new UserMood("Vanessa", "tired");
// console.log ("Today, " + UserMood2.name + " is "+ UserMood2.mood + ".");

