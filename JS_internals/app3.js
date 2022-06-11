// block scoping shadowing
var a = 10;
let y = 20;
{
    var x = 1;
    let y = 2;
    const z = 3;
}

console.log(z);