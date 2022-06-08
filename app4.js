// Closures
// function x() {
//     let a = 10;
//     function y() { 
//         console.log(a);
//     }
//     a = 20; // Will update a in the scope
//     return y; // return a closure
//     // returns a function with its lexical scope
// }

// var z = x();
// console.log(z);
// z();


function a() {
    let m = 10;
    function b() { 
        let n = 20;
        function c() {
            console.log(m);
            console.log(n);
        }
        c();
    }
    b();
}
a()