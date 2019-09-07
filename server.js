const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');

const cards = require('./routes/api/cards')

const app = express()

//Body parser middleware
app.use(express.json())

// DB Config
const db = process.env.mongoURI

mongoose.connect(db, {useNewUrlParser: true})
    .then (() => console.log('mongoDB Connected...'))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/cards', cards)

//Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on Port ${port}`))