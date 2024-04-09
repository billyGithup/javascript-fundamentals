function whileExample() {
  let value = 1;
  while (value < 500) {
    console.log(value);
    value++;
  }
}
// whileExample();

function doWhileExample() {
  let num = 0;
  do {
    console.log(num);
    num++;
  } while (num < 5);
}
// doWhileExample();

// This one is about the For loop
const forExample = () => {
  for (index = 0; index <= 7; index++) {
    console.log(`Number is ${index}`);
  }
};
// forExample();

const evenNumbers = () => {
  for (num2 = 0; num2 <= 20; num2++) {
    if (num2 % 2 == 0) {
      console.log(`${num2} is even.`);
    }
  }
};
// evenNumbers();

const exampleBreakContinue = () => {
  for (position = 0; position <= 7; position++) {
    if (position === 2) {
      continue;
    }

    if (position === 7) {
      console.log("Loop breaks");
      break;
    }

    console.log(position);
  }

  console.log("Loop ends!");
};
// exampleBreakContinue();

const exampleLabel = () => {
  let value2 = "";
  forLoop: for (i = 0; i < 30; i++) {
    if (i % 2 == 0) {
      continue forLoop;
    }

    value2 += `${i}, `;
    // value2 = value2 + `${i}, `;
  }

  console.log(value2);
};
exampleLabel();
