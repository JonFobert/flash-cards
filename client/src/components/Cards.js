/*TO DO: 
    - left and right arrow keys to advance or go back
*/

import React from 'react';

class TopCardFront extends React.Component {
    constructor(props) {
        super(props);
    }

    //flip animation: https://www.w3schools.com/howto/howto_css_flip_card.asp
    render() {
        return (
            <div className="topCardFront">
                <h1>Question:</h1>
                <p>Question text goes here</p>
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
                <p>Answer text goes here</p>
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
                    <TopCardFront />
                    <TopCardBack />
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
      return (
        <div className = "cards">
            <div className = "lastCard" />
            <div className = "middleCard" />
            <TopCard/>
        </div>
      )
    }
  }
  
  export default Cards;