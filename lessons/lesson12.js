const note = () => {
  console.log("This note is shown after 2 seconds.");
};

// setTimeout(note, 5000);

// setTimeout(() => {
//   console.log("An arrow function is called in 4 seconds.");
// }, 4000);

function score(grade) {
  switch (grade) {
    case "A":
      console.log(`You got an ${grade}, awesome!`);
      break;
    case "B":
      console.log(`You got an ${grade}, nice!`);
      break;
    case "C":
      console.log(`You got an ${grade}, good!`);
      break;
    case "D":
      console.log(`You got an ${grade}, do better!`);
      break;
    default:
      console.log(`You got an ${grade}, you need to study!`);
      break;
  }
}

function getGrade(value, callback) {
  let gradeValue;
  switch (true) {
    case value >= 90:
      gradeValue = "A";
      break;
    case value >= 80:
      gradeValue = "B";
      break;
    case value >= 70:
      gradeValue = "C";
      break;
    case value >= 60:
      gradeValue = "D";
      break;
    default:
      gradeValue = "F";
      break;
  }
  callback(gradeValue);
}

// getGrade(85, score)

// const myPromise = new Promise((resolve, reject) => {
//   let num = 0;
//   setTimeout(() => {
//     if (num > 10) {
//       resolve(num);
//     } else {
//       reject("Promise value is not high enough.");
//     }
//   }, 5000);
// });

// myPromise
//   .then((value) => {
//     console.log(`Successful promise: the result is ${value}.`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(myPromise);

const delayForAMoment = (delta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Async resolved ${delta}`);
    }, 6000);
  });
};

const myAsync = async (echo) => {
  try {
    console.log("Calling delay");
    const result = await delayForAMoment(echo);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

myAsync("Now");
myAsync("Shortly");
myAsync("Soon");
