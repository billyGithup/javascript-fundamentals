const bun = require("./ingredients/bun.json");
const cheese = require("./ingredients/cheese");
const vegetables = require("./ingredients/vegetables");
const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

const promptUser = (promptMsgOne, menuNumbers) => {
  let choice = prompt(promptMsgOne);
  while (!(menuNumbers.includes(choice) && choice.length == 1)) {
    choice = prompt("Please enter only the numbers on the menu: ");
  }
  return choice;
};

const showMenu = (itemList) => {
  let menuNumbers = "";
  console.log();
  for (let index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

  // A brute-force way
  // console.log(
  //   `\n1. ${buns[0][0]} - $${buns[0][1]}\n2. ${buns[1][0]} - $${buns[1][1]}\n3. ${buns[2][0]} - $${buns[2][1]}\n4. ${buns[3][0]} - $${buns[3][1]}`
  // );
  // console.log();

  return menuNumbers;
};

exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

exports.chooseYourBun = () => {
  const buns = Object.entries(bun);
  const menuNumbers = showMenu(buns);
  const bunChoice = promptUser("Please choose your bun: ", menuNumbers);
  return buns[parseInt(bunChoice) - 1];
};

exports.chooseYourCheese = function () {
  const cheeseList = Object.entries(cheese.cheese);
  const menuNumbers = showMenu(cheeseList);
  const cheeseChoice = promptUser("Please choose your cheese: ", menuNumbers);
  return cheeseList[parseInt(cheeseChoice) - 1];
};

exports.chooseYourMeat = function () {
  try {
    let menuNumbers = "";
    const meatList = fs
      .readFileSync("sandwichShop\\ingredients\\meat.txt", "utf8")
      .split("\r\n")
      .slice(0, -1);

    console.log();
    for (let index = 0; index < meatList.length; index++) {
      const meatMenu = [
        `${index + 1}. `,
        meatList[index].slice(0, -5),
        " - $",
        meatList[index].slice(-4, meatList[index].length)
      ].join("");
      menuNumbers += (index + 1).toString();
      console.log(meatMenu);
    }
    console.log();

    const meatChoice = promptUser("Please choose your meat: ", menuNumbers);

    return meatList[parseInt(meatChoice) - 1];
  } catch (error) {
    console.error("Error opening meat.txt file!");
  }
};

exports.chooseYourVegetables = function () {
  const vegies = Object.entries(vegetables);
  let menuNumbers = "";

  console.log();
  for (let index = 0; index < vegies.length + 1; index++) {
    menuNumbers += (index + 1).toString();
    if (index + 1 == vegies.length + 1) {
      console.log(`${index + 1}. All`);
      break;
    }
    const arr = [...vegies[index]];
    arr.splice(1, 0, " - $");
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

  const vegieChoice = promptUser(
    "Please choose your vegetables: ",
    menuNumbers
  );

  if (vegieChoice == "5") {
    return vegies;
  } else {
    return vegies[parseInt(vegieChoice) - 1];
  }
};

exports.getTotalCost = function (orderedSandwich) {
  let vegieTotalCost = 0;

  if (
    orderedSandwich.vegetables.length == 2 &&
    orderedSandwich.vegetables[0] != "object"
  ) {
    vegieTotalCost += orderedSandwich.vegetables[1];
  } else {
    for (let index = 0; index < orderedSandwich.vegetables.length; index++) {
      vegieTotalCost += orderedSandwich.vegetables[index][1];
    }
  }

  return (
    orderedSandwich.bun.pop() +
    orderedSandwich.cheese.pop() +
    parseFloat(orderedSandwich.meat.slice(-4)) +
    vegieTotalCost
  ).toFixed(2);
};
