if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: '.env'}) // loads .env file contents in to process.env
}

const express = require('express') /// import express
const app = express()// create app
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') // calling the new route we created to server


// setting app dependencies
app.set('view engine', 'ejs')  // ejs files 
app.set('views', __dirname + '/views') // mvc views location setting
app.set('layout', 'layouts/layout') // mvc layout location setting

app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose') //import mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // connection for database , when developing connect to localserver , otherwise to cloud
//for local acess w are passing a local enviorment url
const db = mongoose.connection // to check if we are connected
db.on('error', error => console.error(error)) // if not connected , give error
db.once('open', () => console.log('Connected to Mongoose')) // else print conected

app.use('/', indexRouter) // setting index.js as home route

app.listen(process.env.PORT || 3000) // checking if the server is in production or offline
// process.env return a object with all system enviorment details