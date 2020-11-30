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

// Triangle
for (let line = "X"; line.length < 8; line += "X") {
  console.log(line)
}

// FizzBuzz- numbers divisible by 3 show "Fizz" and numbers divisible by 5 show "Buzz"
for (i = 1; i <= 100; i++) {
    if (i%3 === 0) {
        console.log("Fizz")
    } else if (i%5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);