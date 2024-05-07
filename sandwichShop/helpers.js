const bun = require("./ingredients/bun.json");
const cheese = require("./ingredients/cheese");
const prompt = require("prompt-sync")({ sigint: true });

exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

exports.chooseYourBun = () => {
  const buns = Object.entries(bun);
  let menuNumbers = "";

  // A more efficient way
  console.log();
  for (let index = 0; index < buns.length; index++) {
    const arr = [...buns[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }

  // A brute-force way
  // console.log(
  //   `\n1. ${buns[0][0]} - $${buns[0][1]}\n2. ${buns[1][0]} - $${buns[1][1]}\n3. ${buns[2][0]} - $${buns[2][1]}\n4. ${buns[3][0]} - $${buns[3][1]}`
  // );
  console.log();

  let bunChoice = prompt("Please choose your bun: ");
  while (!(menuNumbers.includes(bunChoice) && bunChoice.length == 1)) {
    bunChoice = prompt("Please enter only the numbers on the menu: ");
  }

  return buns[parseInt(bunChoice) - 1];
};

exports.chooseYourCheese = function () {
  const cheeseList = Object.entries(cheese.cheese);
  // let menuNumbers = "";

  // console.log();
  // for (let index = 0; index < buns.length; index++) {
  //   const arr = [...buns[index]];
  //   arr.splice(1, 0, " - $");
  //   menuNumbers += (index + 1).toString();
  //   console.log(`${index + 1}. ${arr.join("")}`);
  // }
  // console.log();

  // let bunChoice = prompt("Please choose your bun: ");
  // while (!(menuNumbers.includes(bunChoice) && bunChoice.length == 1)) {
  //   bunChoice = prompt("Please enter only the numbers on the menu: ");
  // }

  // return buns[parseInt(bunChoice) - 1];
};
