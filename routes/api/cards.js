const express = require('express');
const router = express.Router()

// Cards Model
const Card = require('../../models/Card');

// @route GET api/cards
// @desc get specified cards
// @access Public
router.get('/', (req, res) => {
    Card.find()
        .then(cards => res.json(cards))
});

// @route POST api/cards
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newCard = new Card({
        category: req.body.category,
        questionText: 'my question',
        answerText: 'my answer'
    })
    newCard.save().then(card => res.json(card))
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