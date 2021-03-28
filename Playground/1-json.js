const fs = require('fs')

/*const book = {
    Name: 'Witch hunting',
    Planet: 'Somewhere',
}*/

/*const bookJSON   = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)*!/*/

//loading the data
/*const dataBuffer = fs.readFileSync('1-json.json') //Read our data from the given file
const dataJSON = dataBuffer.toString() //Convert the retrieved data into a String
const data = JSON.parse(dataJSON) //Parse the JSON data into a data object
console.log(data.title) //Access the property from the data*/

// const dataBuffer2 = fs.readFileSync('1-json.json')
/*const bookJSON2 = JSON.stringify(book) // Add the method Stringify to the book property
fs.writeFileSync('1-json.json', bookJSON2) //Append the object to the location
console.log(bookJSON2)*/

const JSONdata = fs.readFileSync('1-json.json')
const data2 = JSONdata.toString()
const user = JSON.parse(data2)

user.name = 'Olasunkanmi';
user.planet = 'NRW, Germany';
user.age = 30;

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

/*console.log(bookJSON)
const parsedDate = JSON.parse(bookJSON)
console.log(parsedDate.author)*/
