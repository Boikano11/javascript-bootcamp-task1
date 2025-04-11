// Temperature check
var temperature = 26;
console.log(`
C-STATEMENTS AND LOOPS
IF-statement:
`);
if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else if (temperature > 25) {
  console.log("It's warm");
} else {
  console.log("Please enter a valid number");
}

//Switch statement
console.log("Switch-statement:");
switch (true) {
  case temperature < 0:
    console.log("It's freezing.");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  case temperature > 25:
    console.log("It's warm");
    break;
  default:
    console.log("Please enter a valid number");
    break;
}
//Disivibility check
var numToCheck = 10;
console.log("Disivibility IF-statement");
if (numToCheck % 2 == 0 && numToCheck % 3 == 0) {
  console.log("Divisible by both.");
} else if (numToCheck % 2 == 0) {
  console.log("Divisible by 2.");
} else if (numToCheck % 3 == 0) {
  console.log("Divisible by 3.");
} else if (numToCheck % 2 !== 0 || numToCheck % 3 !== 0) {
  console.log("Not divisible by 2 or 3");
}
//Switch Statement
console.log("Disivibility switch-statement");
switch (true) {
  case numToCheck % 2 == 0 && numToCheck % 3 == 0:
    console.log("Divisible by both.");
    break;
  case numToCheck % 2 == 0:
    console.log("Divisible by 2.");
    break;
  case numToCheck % 3 == 0:
    console.log("Divisible by 3.");
    break;
  case numToCheck % 2 !== 0 || numToCheck % 3 !== 0:
    console.log("Divisible by both.");
    break;
}

//for loop
console.log("NUMBERS 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("EVEN NUMBERS 1 to 20");
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
let sumToHun = 0;
for (let i = 1; i <= 100; i++) {
  sumToHun += i;
}
console.log(`Sum 1 to 100: ${sumToHun}`);

const numbers = [3, 7, 2, 5, 10, 6];
const max = Math.max(...numbers);
console.log(`
  Numbers: [${numbers}]
  Max: ${max}
`);

// While loops

let count = 1;
console.log("While loop");
while (count <= 10) {
  console.log(count);
  count++;
}
//Even numbers
// let count2 = 1;
// console.log("Even Numbers");
// while (count2 <= 20) {
//   if (count2 % 2 === 0) {
//     console.log(count2);
//   }
//   count2++;
// }

//Sum 1 to 100
let count3 = 1;
let sum1 = 0;
console.log("Sum");
while (count3 <= 100) {
  sum1 += count3;
  count3++;
}

console.log("The sum of numbers from 1 to 100 is:", sum1);

let count4 = 5;
console.log("Multiples of 50");
while (count4 <= 50) {
  console.log(count4);
  count4 += 5;
}
//Do-while
let c = 1;
console.log("Do While");

do {
  console.log(c);
  c++;
} while (c <= 10);

let d = 1;
let sumd = 0;
console.log("Do While");

do {
  sumd += d;

  d++;
} while (d <= 100);
console.log("Sum 1 to 100:", sumd);

//Promt
let userInput;

do {
  userInput = parseInt(prompt("Enter a number greater than 10:"), 10);
} while (isNaN(userInput) || userInput <= 10);

console.log("You entered:", userInput);

//Guessing game
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  const input = prompt("Guess a number between 1 and 10:");

  if (input === null) {
    alert("Game cancelled. Goodbye!");
    break;
  }

  guess = parseInt(input, 10);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  }
} while (guess !== randomNumber);

if (guess === randomNumber) {
  alert("Correct! The number was " + randomNumber);
}
