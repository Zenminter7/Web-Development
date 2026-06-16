// Checking if number is odd or not
function odd_even(number){
    if(number % 2 === 0){
        console.log("The number is even!");
    }
    else {
        console.log("The nummber is odd!");
    }
}
odd_even(8);

// Multiplication Table Generator
function table(number){
    for(let i=1; i<=10: i++){
        console.log(number + " x " + i + " = " + (number * i));
    }
}

table(5);

// FizzBuzz Challenge

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Square Pattern

function squarePattern(num) {
  for (let i = 1; i <= num; i++) {
        let row = "* ".repeat(num);
        console.log(row);
    }
}
squarePattern(5);

// Right-Angled Triangle

function trianglePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

trianglePattern(5);
