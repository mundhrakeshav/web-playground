// Run in debug and check execution context

var x = 2;
function square(num) {
    const ans = num * num; 
    return ans;
}

function cube(num) {
    const ans = square(num) * num;
    return ans;
}
var a = cube(x);
b = square(x);

const resultSq2 = square(x);
const resultSq3 = square(3);
const resultCube2 = cube(x);
const resultCube3 = cube(3);
