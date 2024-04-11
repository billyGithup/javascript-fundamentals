const programmingLanguages = new Map();
// console.log(programmingLanguages);
programmingLanguages.set("lang1", "JavaScript");
programmingLanguages.set("lang2", "Python");
programmingLanguages.set("lang3", "Java");
programmingLanguages.set("lang4", "Ruby");
// console.log(programmingLanguages);

const getDays = () => {
  const week = new Map();
  week.set(1, "Monday");
  week.set(2, "Tuesday");
  week.set(3, "Wednesday");
  week.set(4, "Thursday");
  week.set(5, "Friday");
  week.set(6, "Saturday");
  week.set(7, "Sunday");

  return week;
};

const programmingLangSize = programmingLanguages.size;
// console.log(programmingLangSize);

const daysMapSize = getDays().size;
// console.log(daysMapSize);

const exampleClear = () => {
  console.log(
    `The programmingLanguages map is ${programmingLangSize} in size.`
  );
  programmingLanguages.clear();
  console.log(
    `After clear, the programmingLanguages map is ${programmingLanguages.size}.`
  );
};
// exampleClear();

const exampleDelete = () => {
  console.log(`The days of the week are ${getDays().size} in total.`);
  const days = getDays();
  const remove1 = days.delete(1);
  const remove2 = days.delete(7);
  console.log(`Removing Sunday ${remove2} and Removing Monday ${remove1}`);
  console.log(`Our work days are ${days.size} in total.`);
  // console.log(days);
  // console.log(getDays());
};
// exampleDelete();

const exampleGetHas = () => {
  const language1 = programmingLanguages.get("lang1");
  const language2 = programmingLanguages.get("lang2");
  console.log(`Language 1 is ${language1} and Language 2 is ${language2}`);

  console.log(programmingLanguages.has("lang5"));
  console.log(programmingLanguages.has("lang4"));
};
// exampleGetHas();

const getDayKeys = () => {
  const daysMap = getDays();
  const mapKeys = daysMap.keys();
  console.log(mapKeys);

  for (const key of mapKeys) {
    console.log(key);
  }

  // console.log(getDays().keys());

  // for (const key of getDays().keys()) {
  //   console.log(key);
  // }
};
// getDayKeys();

const getEntries = () => {
  const values = programmingLanguages.entries();
  console.log(values);

  for (const entry of values) {
    console.log(entry);
    console.log(entry.length);
  }
};
// getEntries();

const weekElement = (value, key) => {
  console.log(`${key} is for ${value}`);
};

const weekForEach = () => {
  const myDays = getDays();
  myDays.forEach(weekElement);

  // myDays.forEach((value, key) => {
  //   console.log(`${key} is for ${value}`);
  // });
};
// weekForEach();
