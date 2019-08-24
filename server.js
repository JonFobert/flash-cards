const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cards = require('./routes/api/cards')

const app = express()

//Body parser middleware
app.use(express.json())

// DB Config
const db = require('./config/keys').mongoURI

mongoose.connect(db, {useNewUrlParser: true})
    .then (() => console.log('mongoDB Connected...'))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/cards', cards)

//const port = process.env.PORT || 3000
const port = 5000

app.listen(port, () => console.log(`server started on Port ${port}`))