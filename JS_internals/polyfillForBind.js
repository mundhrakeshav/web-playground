let name = {
    firstName: "Keshav",
    lastName: "Mundhra",
}

let printName = function () { 
    console.log(this.firstName + " " + this.lastName);
}

let printNameWithCity = function (homeTown) { 
    console.log(this.firstName + " " + this.lastName, homeTown);
}
let printNameWithCityAndState = function (homeTown, state) { 
    console.log(this.firstName + " " + this.lastName, homeTown, state);
}

Function.prototype.myBind = function (context, ...args) { 
    //this is the function we are binding
    const obj = this;
    return function (...params) {
        obj.apply(context, [...args, ...params]);
    }
}

//mybind function is a function that works exactly like bind 

const printNameMB = printName.myBind(name);
const printNameWithCityMB = printNameWithCity.myBind(name, "Jaipur");
const printNameWithCityAndStateMB = printNameWithCityAndState.myBind(name, "Jaipur");
printNameMB();
printNameWithCityMB();
printNameWithCityAndStateMB("Raj");