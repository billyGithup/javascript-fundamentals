const { fetchdata } = require("./index.js");

// test("fetchdata should return the correct data", () => {
//   const data = fetchdata();
//   expect(data).toEqual(
//     JSON.stringify({
//       name: "Jon Snow",
//       age: 36,
//       email: "jonsnow@gmail.com"
//     })
//   );
// });

// Using resolve matcher to test asynchronous operation
test("fetchdata should return the correct data", () => {
  return expect(fetchdata()).resolves.toBe(
    JSON.stringify({
      name: "Jon Snow",
      age: 36,
      email: "jonsnow@gmail.com"
    })
  );
});
