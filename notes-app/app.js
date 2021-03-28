const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//Customize your version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Adding a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'This is my note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
            notes.addNote (argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    description: 'Remove a note !',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) /* Argv Have access to all the properties in the handler*/ {
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    description: 'Removing a Note!',
    handler: function() {
        console.log('Reading the files in the note !')
    }
})

//create List command
yargs.command({
    command: 'list',
    description: 'Listing all the Note',
    handler: function() {
        console.log('Listing out all the note.!')
    }
})
yargs.parse()

/*const msg = getNote()

console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success')
console.log(greenMsg);

console.log(process.argv[2])

const command = process.argv[2]

if (command=== 'add') {
    console.log('Adding note !')
} else  if (command === 'remove'){
    console.log('Removing Note')
}

console.log(process.argv)
console.log(yargs.argv)*/


// Lecture 7 (Removing a Note) 10:20