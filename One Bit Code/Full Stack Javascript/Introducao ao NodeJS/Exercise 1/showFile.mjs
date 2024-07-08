import fs from "node:fs";

//ASYNC
// export default function showFile() {
//   fs.readFile("./myfile.txt", "utf-8", (error, data) => {
//     if (error) {
//       console.log("Error reading file:", error.message);
//       return;
//     }

//     console.log(data);
//   });
// }

//SYNc PROMISES
export default function showFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./myfile.txt", "utf-8", (error, data) => {
      if (error) {
        reject("Error reading file: ", error.message);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}
