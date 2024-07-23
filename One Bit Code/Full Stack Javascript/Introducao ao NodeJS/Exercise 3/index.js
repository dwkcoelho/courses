const fs = require('node:fs')
const path = require('node:path')
const readLine = require('node:readline')

const notesDirectory = path.join(__dirname, 'notes')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function initializeNotesDirectory(){
    if(!fs.existsSync(notesDirectory)) {
        fs.mkdirSync(notesDirectory)
    }
}

function listNotes() {
    const notes = fs.readdirSync(notesDirectory)

    if(notes.length === 0) {
        return console.log('No notes found')
    } else {
        console.log('Notes found:')
        notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note}`)
        })
    }
}

function readNote() {
    listNotes()

    rl.question('Enter the number of the note you want to read: \n', (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index - 1]

        if(!selectedNote) {
          console.log('Invalid number note!')
        } else {
          const notePath = path.join(notesDirectory, selectedNote)
          const content = fs.readFileSync(notePath, 'utf-8')
          console.log(`Note content "${selectedNote}": \n${content}`);
        }
        askForNextAction()
    })
}


function createNote() {
  rl.question("Enter the name of the note: ", (noteName) => {
    const notePath = path.join(notesDirectory, noteName)

    rl.question("Enter the content of the note:\n", (content) => {
      fs.writeFileSync(notePath + ".txt", content, "utf-8")
      console.log(`${noteName} note was created!`)

      askForNextAction()
    })
  })
}

function deleteNote() {
  listNotes()

  rl.question('Enter the number of the note you want to delete:', (index) => {
    const notes = fs.readdirSync(notesDirectory)
    const selectedNote = notes[index - 1]

    if(!selectedNote) {
      console.log('Invalid Number!')
    } else {
      const notePath = path.join(notesDirectory, selectedNote)
      fs.unlinkSync(notePath)
      console.log(`Note "${selectedNote}" was deleted!`)
    }
    askForNextAction()
  })
}

function askForNextAction() {
  rl.question('\nDo you want to perform another action? (y/n) : ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      main()
    } else {
      console.log('Exiting...')
      rl.close()
      process.exit(0)
    }
  })
}

function main() {
    initializeNotesDirectory()

    console.clear()
    console.log("-----------------------------")
    console.log("Quick Notes in Terminal v1.0")
    console.log("-----------------------------\n")

    console.log("Choose an option:")
    console.log("1. List notes")
    console.log("2. Read a note")
    console.log("3. Create a new note")
    console.log("4. Delete a note")
    console.log("5. Exit")
  
    rl.question("Enter the desired option number: ", (option) => {
      switch (option) {
        case "1":
          listNotes()
          askForNextAction()
          break;
        case "2":
          readNote()
          break
        case "3":
          createNote()
          break
        case "4":
          deleteNote()
          break;
        case "5":
          console.log("Exiting...")
          rl.close()
          process.exit(0)
        default:
          console.log("Invalid option!")
          break;
      }
    })
}

main()
