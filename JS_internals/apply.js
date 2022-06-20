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
//The required params are needed to be passed in a array
fullName.apply(name2);
fullNameWithHomeTown.apply(name2, ["Jaipur"]);
fullNameWithHomeTownAndState.apply(name2, ["Jaipur", "RAJ"]);