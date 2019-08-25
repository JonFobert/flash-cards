/*TO DO: 
    - left and right arrow keys to advance or go back
*/

import React from 'react';
import cardsFromJSON from '../cards.json'

class TopCardFront extends React.Component {
    constructor(props) {
        super(props);
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="topCardFront">
                <h1>Question:</h1>
                <p>{this.props.card.questionText}</p>
            </div>
        )
    }
}

class TopCardBack extends React.Component {
    constructor(props) {
        super(props);
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="topCardBack">
                <h1>Answer:</h1>
                <pre>{this.props.card.answerText}</pre>
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
        return (
            <div className = "topCard">
                <div className = "topCardInner">
                    <TopCardFront card = {this.props.card}/>
                    <TopCardBack card = {this.props.card}/>
                </div>
            </div> 
        )
    }
}

class Cards extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let currentCard = cardsFromJSON[0]

      return (
        <div className = "cards">
            <div className = "lastCard" />
            <div className = "middleCard" />
            <TopCard card = {currentCard} />
        </div>
      )
    }
  }
  
  export default Cards;