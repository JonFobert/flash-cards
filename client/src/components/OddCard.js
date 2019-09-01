/*TO DO: 
    - left and right arrow keys to advance or go back
*/

import React from 'react';

class TopCardFront extends React.Component {
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
            <div className="topCardFront">
                <h1>Question:</h1>
                <p>{this.props.card.questionText}</p>
                <button id="flipCard" onClick = {this.handleCardFlip}>Flip Over</button>
            </div>
        )
    }
}

class TopCardBack extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCardFlip = () => {
        this.props.handleCardFlip()
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="topCardBack">
                <h1>Answer:</h1>
                <p>{this.props.card.answerText}</p>
                <button id="flipCardBack" onClick = {this.handleCardFlip}>Flip Over</button>
            </div>
        )
    }
}

class TopCard extends React.Component {
    constructor(props) {
        super(props);
    }

    //flip animation adapted from: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        let flippedClass = 'topCard'
        if(this.props.cardFlipped) {
            flippedClass = 'topCard flipped'
        }
        //push the card over.
        return (
            <div className = {flippedClass}>
                <div className = 'topCardInner quickFlip'>
                    <TopCardFront card = {this.props.card} handleCardFlip = {this.props.handleCardFlip}/>
                    <TopCardBack card = {this.props.card} handleCardFlip = {this.props.handleCardFlip}/>
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
            <div className = "cards">
                <TopCard card = {currentCard} handleCardFlip = {this.props.handleCardFlip} cardFlipped = {this.props.cardFlipped}/>
            </div>
        )
    }
  }
  
  export default OddCard;