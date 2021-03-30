const fs = require('fs')
const chalk = require('Chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote =  notes.find((note) => note.title === title)

    debugger

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('New notes Added !'))
    } else {
        console.log(chalk.gray.inverse('Note title already taken. Please use another Title !'))
    }

}

const removeNote = (title) => {

    const notes = loadNotes()

    const notes2Keep = notes.filter((note) => note.title !== title)

    if (notes.length > notes2Keep.length) {
        notes.push({
            Title: title
        })
        saveNotes(notes2Keep)
        console.log(chalk.green.inverse("Note with Title Name: " + title + " Was removed !"))
    } else {
        console.log(chalk.red.inverse("No note with " + title + " Was found !"))
    }

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] //Return an empty array if n
    }

}


const readNote = (title) => {
    const notes = loadNotes() // load the notes into the file
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.gray.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note " + title + " was not found"))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


