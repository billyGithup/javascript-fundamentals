const prompt = require("prompt-sync")({ sigint: true });

const EIGHT_CHAR_LONG = 8;
const SIXTEEN_CHAR_LONG = 26;
const specialChars = "(~!@#$%^&*()_+-|{}[]\\''\"\":;?/<>.,)";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const numbersLetters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const mixed =
  "(~!@#$%^&*()_+-|{}[]\\''\"\":;?/<>.,)ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const lengthSelectionMenu =
  "\nPlease select length:\n1) 8 characters\n2) 16 characters\n3) Enter length\n4) Exit ";
const charTypeSelectionMenu =
  "\nPlease select character type:\n1) Letters only\n2) Numbers only\n3) Numbers and letters\n4) Special characters only\n5) Mixed\n6) Exit";
let customLength = "";
let excludedChars = "";

console.log(lengthSelectionMenu);
let lengthChoice = prompt();

while (!("1234".includes(lengthChoice) && lengthChoice.length == 1)) {
  lengthChoice = prompt("Please enter only a number on the menu: ");
}
