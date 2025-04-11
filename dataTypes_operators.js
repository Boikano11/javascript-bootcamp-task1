// Numbers
var number = 5;
var float = 0.5;
var addition = number + float;
var subtraction = number - float;
var multiplication = number * float;
var division = number / float;
var modulus = number % float;
var exponentiation = number ** float;

console.log(`
DATA TYPES AND OPERATORS

Numbers:
 Operands: ${number}, ${float}
 Addition: ${addition}
 Subtraction: ${subtraction}
 Multiplication: ${multiplication}
 Division: ${division}
 Modulus: ${modulus}
 Exponentiation: ${exponentiation}    
`);

//Boolean and Operators
var x = 8;
var y = 12;
console.log(`
Boolean and Operators X & Y
 x is greater than y: ${x > y}
 x is less than or equal to y: ${x <= y}
 x is equal to y: ${x == y}
 x is not equal to y: ${x !== y}
`);

var a = true;
var b = false;

console.log(`
Boolean and Operators A & B
 a AND b: ${a && b}
 a OR b: ${a || b}
 NOT a: ${!a}
`);

var p = 10;

console.log(`
Original value is ${p} 
 p += 1: ${(p += 1)}
 p -= 2: ${(p -= 2)}
 p *= 2: ${(p *= 2)}
 p /= 2: ${(p /= 2)}
 p %= 2: ${(p %= 2)}    
`);
