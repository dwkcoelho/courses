import fs from "node:fs";

//ASYNC
// export default function updateFile(content) {
//   fs.writeFile("./myfile.txt", content, "utf-8", (error) => {
//     if (error) {
//       console.log("Error updating file:", error.message);
//       return;
//     }

//     console.log("File updated successfully!");
//   });
// }

//SYNc PROMISES
export default function updateFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("myfile.txt", content, (error) => {
      if (error) {
        reject("Error updating file: ", error.message);
      } else {
        resolve();
      }
    });
  });
}
