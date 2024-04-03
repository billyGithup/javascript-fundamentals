// Numbers examples
const value1 = 42;
const value2 = 34.4;
const value3 = -34.3;

// 17 decimal point precision
const value4 = 4.38492748263438648;
// console.log(value4);

// BigInt values
const value5 = 38492748263438648n;
const value6 = 256n;
// console.log(value6);

// Number systems
let ex_binary = 0b11010; // binary number
let ex_hexadecimal = 0x1a; // hexadecimal number
let ex_octal = 0o32; // octal number
// console.log(ex_binary);
// console.log(ex_hexadecimal);
// console.log(ex_octal);

// Exponential literals
// Exponents are considered 10 to the something power
const aa = 0e-3; // 0
const bb = 0e5; // 0
const cc = 4e2; // 400
const dd = 234e-2; // 2.34
const ee = 2e-3; // 0.002
// console.log(ee);

// Numeric separators - using underscores for readability
let gg = 9_563.25;
let hh = 0b1010_0001;
let ii = 0xa0_b0_c0;
// console.log(gg);
// console.log(hh);
// console.log(ii);

const value = "42";
const value12 = "35";
const combined10 = value + value12;
console.log(combined10);

// Static properties of the Number object
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

// Static methods of the Number object
console.log(Number.isNaN(ii));
console.log(Number.isInteger(hh));

let verifyInt = Number.parseInt(value);
console.log(verifyInt + 5);

let verifyFloat = Number.parseFloat(value12);
console.log(verifyFloat + 10); // 45.0

// Instance method can be accessed from the variable
console.log(value1.toExponential());
console.log(value2.toFixed(4));
console.log(value3.toPrecision(15));
