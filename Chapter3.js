// min
const min = (val1, val2) => {
    if (val1 < val2) {
        return val1
    } else {
        return val2
    }
}

// Recursion
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

// Bean Counting
function countBs(string) {
    return countChar(string, "B")
}

function countChar(string, char) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count += 1
        }
    }
    return count
}
console.log(countBs("Barbeque"))
console.log(countChar("mississippi", "s"))