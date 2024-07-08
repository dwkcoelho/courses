import createFile from "./createFile.mjs";
import deleteFile from "./deleteFile.mjs";
import showFile from "./showFile.mjs";
import updateFile from "./updateFile.mjs";

//ASYNC
// createFile("Initial content of the file.\nCreated with the Node.js fs module.");
// showFile();
// updateFile("Modified content!");
// showFile();
// deleteFile();

//SYNc PROMISES ASYNC/AWAIT
async function start() {
  await createFile(
    "Initial content of the file.\nCreated with the Node.js fs module."
  );
  await showFile();
  await updateFile("Modified content!");
  await showFile();
  await deleteFile();
}

start();
