/*TO DO: 
    - left and right arrow keys to advance or go back
*/

import React from 'react';

class CardFront extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCardFlip = () => {
        console.log('inital flip recoreded')
        this.props.handleCardFlip()
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="cardFront">
                <h1>Question</h1>
                <p>{this.props.card.questionText}</p>
                <button className="flipCardFrontButton" onClick = {this.handleCardFlip}>Flip Over</button>
            </div>
        )
    }
}

class CardBack extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCardFlip = () => {
        this.props.handleCardFlip()
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="cardBack">
                <h1>Answer</h1>
                <p>{this.props.card.answerText}</p>
                <button className="flipCardBackButton" onClick = {this.handleCardFlip}>Flip Over</button>
            </div>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    //flip animation adapted from: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        let flippedClass = 'card'
        if(this.props.cardFlipped) {
            flippedClass = 'card flipped'
        }
        //push the card over.
        return (
            <div className = {flippedClass}>
                <div className = 'cardInner quickFlip'>
                    <CardFront card = {this.props.card} handleCardFlip = {this.props.handleCardFlip}/>
                    <CardBack card = {this.props.card} handleCardFlip = {this.props.handleCardFlip}/>
                </div>
            </div> 
        )
    }
}

class OddCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let currentCard = this.props.cards[this.props.index]

        return (
            <div className = "cardHolder">
                <Card card = {currentCard} handleCardFlip = {this.props.handleCardFlip} cardFlipped = {this.props.cardFlipped}/>
            </div>
        )
    }
  }
  
  export default OddCard;