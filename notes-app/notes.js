const fs = require('fs')
const chalk = require('Chalk')

const getNote = function () {
    return 'Your note is ... !'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if(duplicateNotes.length=== 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('New notes Added !'))
    } else {
        console.log('Note title already taken. Please use another Title !')
    }

}

const removeNote = function (title) {

    const  notes = loadNotes()

    const notes2Keep = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > notes2Keep.length){
        notes.push({
            Title: title
        })
        saveNotes(notes2Keep)
        console.log(chalk.green.inverse("Note with Title Name: " + title + " Was removed !"))
    } else {
        console.log(chalk.red.inverse("No note with " + title + " Was found !"))
    }

    // saveNotes(notes2Keep)


/*
    try {
        fs.unlinkSync('notes.json')
        console.log('File removed')
    } catch(err) {
        console.error(err)
    }
*/

}



const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] //Return an empty array if n
    }

}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}
