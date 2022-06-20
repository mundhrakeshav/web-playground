let name = {
    firstName: "Keshav",
    lastName: "Mundhra",
}
function fullName() { 
    console.log(this.firstName + " " + this.lastName);
}
function fullNameWithHomeTown(homeTown) { 
    console.log(this.firstName + " " + this.lastName + " " + homeTown);
}
function fullNameWithHomeTownAndState(homeTown, state) { 
    console.log(this.firstName + " " + this.lastName + " " + homeTown, state);
}

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

//Function borrowing, using call
//FirstArgurment: where our this needs to point to, context
//First arguement onward all the required params can be passed
fullName.call(name2);
fullNameWithHomeTown.call(name2, "Jaipur");
fullNameWithHomeTownAndState.call(name2, "Jaipur", "RAJ");