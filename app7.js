function Counter() {
    var count = 0;
    this.increment = function() {
        count++;
        console.log(count);
    }
    this.decrement = function () { 
        count--;
        console.log(count);
    }
    // return this;
}

// const counter = Counter();
const counter = new Counter();

counter.increment();
counter.decrement();
console.log(counter);