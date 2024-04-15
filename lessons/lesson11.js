const myHouse = new Object();
// console.log(myHouse);
myHouse.foundation = "Concrete";
myHouse.windowSize = "20";
myHouse.doorColor = "White";
myHouse.roofType = "Composite";
// console.log(myHouse);
// console.log(myHouse.roofType);

const house = {
  foundationStyle: "Dirt",
  windowInchSize: 30,
  houseColor: "Tan",
  roofTileType: "Shingle"
};
// console.log(house);
house.foundationStyle = "Concrete";
house["houseColor"] = "White";
// console.log(house);
// console.log(house["houseColor"]);

const somethingObj = {};
const str = "someString";
const rand = Math.random();
const myObj = {};

somethingObj.type = "Lorem ipsum dolor sit amet";
somethingObj["date issued"] = "key has a space";
somethingObj[str] = "Key is str variable.";
somethingObj[rand] = "Key is rand variable";
somethingObj[myObj] = "Key is myObj variable";
somethingObj[""] = "Key is an empty string";
// console.log(somethingObj);
// console.log(somethingObj.someString);
// console.log(somethingObj[{}]);
// console.log(somethingObj[""]);

const alpha = Math.random();
const beta = "My beta";
const cat = "My cat";

const happy = {
  [cat]: "Some number",
  [beta]: "Just another string"
};
// console.log(happy);
// console.log(happy["My cat"]);
// console.log(happy[cat]);

const showSomething = (obj, objName) => {
  let result = "";
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      result += `${objName}.${key} = ${obj[key]}\n`;
      // result = result + `${objName}.${key} = ${obj[key]}\n`;
    }
  }
  console.log(result);
};
showSomething(somethingObj, "somethingObj");
