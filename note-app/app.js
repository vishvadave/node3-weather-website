const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')

//add, remove, read, list

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe: 'Remove a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        // body: {
        //     describe: 'Note body',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler (argv){
        notes.removeNote(argv.title)
        //console.log('Removing a note!')
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'listing new note',
    handler () {
        notes.listNote()
    }
})

//read command 
yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
    notes.readNote(argv.title)
    }

})

yargs.parse()