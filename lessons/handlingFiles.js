const fs = require("fs");
const fsPromise = require("fs").promises;

// This part is for reading a file.
// const buf = new Buffer.allocUnsafe(1024);
// console.log("Going to open an existing file...");

// fs.open("input.txt", "r", (err, fd) => {
//   if (err) return console.error(err);

//   console.log("File opened successfully!");

//   console.log("Going to read the file!");

//   // Reading the file content
//   fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//     if (err) console.log(err);

//     console.log(bytes + " bytes read!");

//     // Printing only read bytes to avoid junk
//     if (bytes > 0) console.log(buf.slice(0, bytes).toString());

//     // Need to close the file
//     fs.close(fd, (err) => {
//       if (err) console.log("Error closing file!");
//       console.log("File closed successfully!");
//     });
//   });
// });

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) return console.error(err);

//   console.log("Asynchronously reading the file: " + data.toString());
//   console.log(data);
// });

const example = async () => {
  try {
    const data = await fsPromise.readFile("input.txt", { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
example();
