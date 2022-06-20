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
//The required params are needed to be passed in a
const fullNameB = fullName.bind(name2);
const fullNameWithHomeTownB = fullNameWithHomeTown.bind(name2, "Jaipur");
const fullNameWithHomeTownAndStateB = fullNameWithHomeTownAndState.bind(name2, "Jaipur", "RAJ");

console.log(fullNameB);
console.log(fullNameWithHomeTownB);
console.log(fullNameWithHomeTownAndStateB);
fullNameB();
fullNameWithHomeTownB();
fullNameWithHomeTownAndStateB();
