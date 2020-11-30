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