const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall.`;

// console.log(message);

const isEven = (number) => {
  if (number < 0) throw new Error("Number must be positive.");
  if (typeof number !== "number") throw new Error("Number must be a number.");
  return number % 2 == 0;
};

const fetchdata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        JSON.stringify({
          name: "Jon Snow",
          age: 36,
          email: "jonsnow@gmail.com"
        })
      );
    }, 3000);
  });
};

module.exports = { name, height, message, isEven, fetchdata };
// module.exports = {
//   name: name,
//   height: height,
//   message: message,
//   isEven: isEven,
//   fetchdata: fetchdata
// };

// This is the result from the JSON.stringify method.
// "{"name": "Jon Snow", "age": "36", "email": "jonsnow@gmail.com"}"
