// power function
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2,10));


// practice factorial function
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return factorial(n - 1) * n
    }
}
console.log(factorial(7))

// typeof
console.log(typeof factorial)

// prompt
let userNumber = Number(prompt('Pick a number'))
    while (Number.isNaN(userNumber)) {
        alert("That's not a number!")
        userNumber = Number(prompt('Pick another number'))
    }
console.log(userNumber)

