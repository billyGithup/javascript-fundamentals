const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");
const fs = require("fs");
const {
  checkYorN,
  acctNumExists,
  validateNewAcctInputs,
  getAccount
} = require("./helpers");

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
  console.log('Found!');
  allAccounts = JSON.parse(
    fs.readFileSync("accountDatabase.txt", "utf8")
  );
  originalAccountAmount = allAccounts.length;
}

console.log(title + "\n");
console.log(chalk.bold("Welcome to ABC BANK!"));

const handleMenu = (acct) => {
  console.log("\n" + menuOptions);

  let input = prompt();
  while (!("123456".includes(input) && input.length == 1)) {
    input = prompt("Please enter only a number on the menu: ");
  }

  if (input == "1") {
    console.log(chalk.green("\nYou current balance is $" + acct.balance + "."));
    input = "";
    handleMenu(acct);
  } else if (input == "2") {
    const currentBalance = parseInt(acct.balance);
    let withdrawAmount = prompt("How much would you like to withdraw?: ");

    while (
      !(
        withdrawAmount.at(-3) == "." &&
        /^[0-9]*$/.test(withdrawAmount.slice(-2)) &&
        withdrawAmount.slice(-2).length == 2 &&
        /^[0-9]*$/.test(withdrawAmount.slice(0, -3))
      )
    ) {
      withdrawAmount = prompt(
        "Please enter amount in the format of dollars and cents: "
      );
    }

    if (withdrawAmount > currentBalance) {
      console.log(
        chalk.red(
          `\nYou do not have enough in your account to withdraw $${withdrawAmount}.`
        )
      );
    } else {
      console.log(chalk.green("\nWithdraw: $" + withdrawAmount));
      console.log(
        chalk.green(
          "Your current balance is $" + (currentBalance - withdrawAmount + ".")
        )
      );
      acct.balance = currentBalance - withdrawAmount;
    }

    input = "";
    handleMenu(acct);
  } else if (input == "3") {
    let depositAmount = prompt("How much would you like to deposit? ");

    while (
      !(
        depositAmount.at(-3) == "." &&
        /^[0-9]*$/.test(depositAmount.slice(-2)) &&
        depositAmount.slice(-2).length == 2 &&
        /^[0-9]*$/.test(depositAmount.slice(0, -3))
      )
    ) {
      depositAmount = prompt(
        "Please enter amount in the format of dollars and cents: "
      );
    }

    console.log(chalk.green("\nDeposit: $" + depositAmount));
    console.log(
      chalk.green(
        "Your current balance is $" +
          (parseFloat(acct.balance) + parseFloat(depositAmount)).toFixed(2) +
          "."
      )
    );

    acct.balance = (
      parseFloat(acct.balance) + parseFloat(depositAmount)
    ).toFixed(2);

    input = "";
    handleMenu(acct);
  } else if (input == "4") {
    console.log(
      chalk.green(
        `\nName: ${acct.name}\nAccount Number: ${acct.accountNumber}\nBalance: $${acct.balance}\nCreated On: ${acct.createdAt}`
      )
    );

    input = "";
    handleMenu(acct);
  } else if (input == "5") {
    const newAcctDB = allAccounts.filter(
      (each) => each.accountNumber != acct.accountNumber
    );
    console.log(newAcctDB);
    fs.writeFile(
      "accountDatabase.txt",
      JSON.stringify(newAcctDB),
      (err) => {
        if (err) throw err;
        console.log(
          chalk.green("\nThe account has been deleted successfully!")
        );
      }
    );
  } else {
    const userAcct = getAccount(allAccounts, acct.accountNumber);

    if (JSON.stringify(userAcct) == JSON.stringify(acct)) {
      if (originalAccountAmount != allAccounts.length) {
        fs.writeFile(
          "accountDatabase.txt",
          JSON.stringify(allAccounts),
          (err) => {
            if (err) throw err;
            console.log(chalk.green(byeMessage));
          }
        );
      } else console.log(chalk.green(byeMessage));
    } else {
      const acctIndex = allAccounts.findIndex((each) => {
        each.accountNumber == userAcct.accountNumber;
      });

      allAccounts[acctIndex] = acct;

      fs.writeFile(
        "accountDatabase.txt",
        JSON.stringify(allAccounts),
        (err) => {
          if (err) throw err;
          console.log(chalk.green(byeMessage));
        }
      );
    }
  }
};

let userInput = prompt(
  "Do you have an account with us? Enter Y for Yes or N for No: "
);
while (!checkYorN(userInput.trim())) {
  userInput = prompt("Please enter only either Y or N: ");
}

if (userInput.trim().toLowerCase() == "n") {
  userInput = prompt("Would you like to have an account, Y or N?: ");

  while (!checkYorN(userInput.trim())) {
    userInput = prompt("Please enter only either Y or N: ");
  }

  if (userInput.trim().toLowerCase() == "n") console.log(byeMessage);

  if (userInput.trim().toLowerCase() == "y") {
    const firstName = prompt("Please enter your first name: ");
    const lastName = prompt("Please enter your last name: ");
    let accountNumber = prompt("Please create your account number: ");
    const balance = prompt("Please enter a balance amount: ");

    while (!/^[0-9]*$/.test(accountNumber.trim() || false)) {
      accountNumber = prompt(
        "Please enter only number for the account number: "
      );
    }

    while (acctNumExists(allAccounts, accountNumber)) {
      accountNumber = prompt(
        `The account number ${accountNumber} is already taken. Please pick another one: `
      );
    }

    if (validateNewAcctInputs(firstName, lastName, balance)) {
      const newAccount = {
        name: firstName + " " + lastName,
        accountNumber,
        balance,
        // accountNumber: accountNumber,
        // balance: balance,
        createdAt: new Date().toLocaleDateString()
      };

      allAccounts.push(newAccount);
      console.log(chalk.green("\nYour account has been created successfully!"));
      handleMenu({ ...newAccount });
    } else {
      console.log(
        chalk.red(
          "\nData entered is invalid. First and last names must be only letters, and balance must be only numbers."
        )
      );
    }
  }
} else {
  const userAcctNum = prompt("Please enter your account number: ");
  const userAcct = getAccount(allAccounts, userAcctNum);

  if (!userAcct) {
    console.log(chalk.red("\nSorry! The account does not exist!"));
  } else {
    handleMenu({ ...userAcct });
  }
}
