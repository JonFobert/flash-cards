const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CardSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    answerText: {
        type: String,
        required: true
    }
});

module.exports = Card = mongoose.model('card', CardSchema)