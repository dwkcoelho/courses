import fs from "node:fs";

//ASYNC
// export default function deleteFile() {
//   fs.unlink("./myfile.txt", (error) => {
//     if (error) {
//       console.log("Error deleting file:", error.message);
//       return;
//     }

//     console.log("File deleted successfully!");
//   });
// }

//SYNC PROMISES
export default function deleteFile() {
  new Promise((resolve, reject) => {
    fs.unlink("./myfile.txt", (error) => {
      if (error) {
        reject("Error deleting file: ".error.message);
      } else {
        console.log("File deleted successfully!");
        resolve();
      }
    });
  });
}
