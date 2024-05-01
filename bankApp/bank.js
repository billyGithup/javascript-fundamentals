const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const fs = require("fs");
const { checkYorN, acctNumExists } = require("./helpers");

const title =
  "================================================\n" +
  "=\t\t\t\t\t       =\n" +
  "=\t\t" +
  "  " +
  "ABC BANK" +
  "\t\t       =" +
  "\n=\t\t\t\t\t       =" +
  "\n================================================";
const menuOptions = `What would you like to do?\n1) Show balance\n2) Withdraw\n3) Deposit\n4) Show account details\n5) Delete account\n6) Exit`;
const byeMessage = "\nThank you for visiting us. Have a nice day!";
let allAccounts = [];
let originalAccountAmount = 0;

if (fs.existsSync("accountDatabase.txt")) {
  allAccounts = JSON.parse(fs.readFileSync("accountDatabase.txt", "utf8"));
  originalAccountAmount = allAccounts.length;
}

console.log(title + "\n");
console.log(chalk.bold("Welcome to ABC BANK!"));

let userInput = prompt(
  "Do you have an account with us? Enter Y for Yes or N for No: "
);
while (!checkYorN(userInput)) {
  userInput = prompt("Please enter only either Y or N: ");
}

if (userInput.toLowerCase() == "n") {
  userInput = prompt("Would you like to have an account, Y or N?: ");

  while (!checkYorN(userInput)) {
    userInput = prompt("Please enter only either Y or N: ");
  }

  if (userInput.toLowerCase() == "n") console.log(byeMessage);

  if (userInput.toLowerCase() == "y") {
    const firstName = prompt("Please enter your first name: ");
    const lastName = prompt("Please enter your last name: ");
    let accountNumber = prompt("Please create your account number: ");
    const balance = prompt("Please enter a balance amount: ");

    while (acctNumExists(allAccounts, accountNumber)) {
      accountNumber = prompt(
        `The account number ${accountNumber} is already taken. Please pick another one: `
      );
    }
  }
}
