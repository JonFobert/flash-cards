const express = require('express');
const router = express.Router()

// Cards Model
const Card = require('../../models/Card');

// @route GET api/cards
// @desc get specified cards
// @access Public
router.get('/', (req, res) => {
    console.log(req.query.categories)
    Card.find({category: {$in: req.query.categories}})
        .then(cards => res.json(cards))
        .catch(err => console.log(err))
});

// @route POST api/cards
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newCard = new Card({
        category: req.body.newCategory,
        questionText: req.body.questionText,
        answerText: req.body.answerText
    })
    newCard.save()
        .then(cards => res.json(cards))
        .catch(err => console.log(err))
})

// @route Delete api/cards
// @desc get specified cards
// @access Public
router.delete('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then(card => card.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success: false}))
});

module.exports = router