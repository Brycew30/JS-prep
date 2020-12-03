// Reverse words greater than 3 characters
let str = "Here is a random sentence to test this function"
let newStr = str.split(" ").map(function(word) {return word.length > 3 ? word.split('').reverse().join('') : word;}).join(' ');
console.log("Reversed string: " + newStr);

// check prime number
function isPrime(n){
  let divisor = 2;
  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}
console.log("145 is prime?" + isPrime(145));

// power function
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log("2 to the 10th power is: " + power(2,10));


// practice factorial function
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return factorial(n - 1) * n
    }
}
console.log("7 factorial is: " + factorial(7));

// typeof
console.log(typeof factorial)

// prompt
let userNumber = Number(prompt('Pick a number'))
    while (Number.isNaN(userNumber)) {
        alert("That's not a number!")
        userNumber = Number(prompt('Pick another number'))
    }
console.log(userNumber + "is the user's number.");

