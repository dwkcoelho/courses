import fs from "node:fs";

//ASYNC
// export default function createFile(content) {
//   fs.writeFile("./myfile.txt", content, "utf-8", (error) => {
//     if (error) {
//       console.log("Error creating file: ", error.message);
//       return;
//     }

//     console.log("File created successfully!");
//   });
// }

//SYNc PROMISES
export default function createFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("myfile.txt", content, (error) => {
      if (error) {
        reject("Error creating file: ", error.message);
      } else {
        resolve();
      }
    });
  });
}
