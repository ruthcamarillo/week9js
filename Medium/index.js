
function pizzaDiv(x, y) {
    x / y;
    return x / y;
}


pizzaDiv(8, 12);
console.log(pizzaDiv(8, 12));

console.log(pizzaDiv(8, 55));

console.log(pizzaDiv(8, 2));

//second way to do it
function pizzaSlice(x, y) {
    let slices = x / y;
    return `Each person gets ${slices} slices of pizza; from out ${x} slice pizza`
}

console.log(pizzaSlice(8, 17))