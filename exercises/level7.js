// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('This is my string');
    }
    return arr;
}

finalFunction(10) //solved