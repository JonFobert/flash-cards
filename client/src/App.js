
import React from 'react';
import './App.css';
import CategoryMenuInitial from './components/CategoryMenuInitial.js'
import TopBar from './components/TopBar.js'
import AddCardMenu from './components/AddCardMenu.js'
import CategoryMenu from './components/CategoryMenu.js'
import EvenCard from './components/EvenCard.js'
import OddCard from './components/OddCard.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'
import { CSSTransition } from "react-transition-group"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false,
      initialCategoriesSelected: false,
      index: 0,
      cards: [],
      categories: ['tv', 'movies', 'stateCapitals', 'bodiesOfWater'],
      categoryMenuOpen: false,
      addCardMenuOpen: false,
      evenCardFlipped: false,
      oddCardFlipped: false,
      nextCardRequested: false,
      previousCardRequested: false
    }
  }

  componentDidMount() {
    this.fetchGetBasedOnCategories()
  }  

  handleInitialCategories = (e) => {
    this.setState({initialCategoriesSelected: true})
  }

  fetchGetBasedOnCategories = () => {
    let categoriesQuery= '';
    categoriesQuery = categoriesQuery.concat('[]=', this.state.categories[0])
    for (let i = 1; i < this.state.categories.length; i++) {
      categoriesQuery = categoriesQuery.concat('&categories[]=', this.state.categories[i])
    };
    fetch(`/api/cards?categories${categoriesQuery}`)
      .then(res => res.json())
      .then (cards => this.setState({cards: cards, doneLoading: true}))
  }

  handleCategoryMenuClick = () => {
    this.setState({categoryMenuOpen: !this.state.categoryMenuOpen})
  }

  handleAddCardMenuClick = () => {
    this.setState({addCardMenuOpen: !this.state.addCardMenuOpen})
  }

  handleCloseCategoryMenu = () => {
    this.setState({categoryMenuOpen: false})
  }

  handleCloseAddCardMenu = () => {
    this.setState({addCardMenuOpen: false})
  }

  handleCategoryChange = (e) => {
    const categoryIndex = this.state.categories.indexOf(e.target.value)
    const stateCategories = this.state.categories
    if(categoryIndex !== -1) {
      if(stateCategories.length !== 1) {
        stateCategories.splice(categoryIndex, 1)
        this.setState({categories: stateCategories, index: 0})
        this.fetchGetBasedOnCategories()
      } else {
        alert("Must have at least one category")
      }
    } else {
      stateCategories.push(e.target.value)
      this.setState({categories: stateCategories})
      this.fetchGetBasedOnCategories()
    }
  }

  handleNewCard = (e, formState) => {
    e.preventDefault()
    fetch('/api/cards', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application.json',
      },
      body: JSON.stringify({categories: this.state.categories, newCategory: formState.newCategory, questionText: formState.questionText, answerText: formState.answerText})
    })
    this.fetchGetBasedOnCategories()
    this.setState({addCardMenuOpen: false})
  }

  flipCardsIfFlipped = () => {
    if(this.state.evenCardFlipped) {
      this.setState({evenCardFlipped: false, })
    }
    if(this.state.oddCardFlipped) {
      this.setState({oddCardFlipped: false})
    }
  }

  handleRightClick = () => {
    if(this.state.index < this.state.cards.length-1) {
      this.flipCardsIfFlipped()
      this.setState({index: this.state.index + 1, nextCardRequested: true})
    }
  }
  
  handleLeftClick = () => {
    if(this.state.index > 0) {
      this.flipCardsIfFlipped()
      this.setState({index: this.state.index - 1, previousCardRequested: true})
    }
  }

  /*******handle flipping cards******** */
  handleEvenCardFlip = () => {
    this.setState({evenCardFlipped: !this.state.evenCardFlipped})
  }

  handleOddCardFlip = () => {
    this.setState({oddCardFlipped: !this.state.oddCardFlipped})
  }

  calculateDisplayedCards = () => {
    let cardsDisplayed = [];
      for(let i = 0; i < this.state.cards.length; i++) {
        for(let j = 0; j < this.state.categories.length; j++) {
          if(this.state.cards[i].category === this.state.categories[j]) {
            cardsDisplayed.push(this.state.cards[i])
          }
        }
      }
    return cardsDisplayed
  }

  displayCards = (index, buttonSelected) => {
    if (buttonSelected === 'next') {

    }

  }

  /*****************
   * Render Method *
   *****************/

  render() {
    if(!this.state.doneLoading) {
      return (<p>loading...</p>)
    } else if(!this.state.initialCategoriesSelected) {
      return (
      <div className = "page">
        <div className = "backgroundImage" />
        <CategoryMenuInitial categories = {this.state.categories} handleCategoryChange = {this.handleCategoryChange} handleInitialCategories= {this.handleInitialCategories} />
      </div>
      )
    } else {
      let categoryMenu;
      if(this.state.categoryMenuOpen) {
        categoryMenu = <CategoryMenu categories = {this.state.categories} handleCategoryChange = {this.handleCategoryChange} handleCloseCategoryMenu = {this.handleCloseCategoryMenu}/>;
      }

      let addCardMenu;
      if(this.state.addCardMenuOpen) {
        addCardMenu = <AddCardMenu handleCloseAddCardMenu = {this.handleCloseAddCardMenu} handleNewCard = {this.handleNewCard} />
      }

      let evenCard
      let oddCard;
      if(this.state.nextCardRequested || (!this.state.nextCardRequested && !this.state.previousCardRequested)) {
        //set indexes for the transision when the next card is requested
        let evenIndex = this.state.index
        let oddIndex = this.state.index
        if(this.state.index % 2) {
          evenIndex = this.state.index - 1
        } else {
          oddIndex = this.state.index - 1
        }
        //create and animate the current and next card
        evenCard = <CSSTransition
          in={this.state.index % 2 === 0}
          //appear = {true}
          timeout = {{
            enter: 400,
            exit: 400
          }}
          onEntered = {() => this.setState({nextCardRequested: false})}
          classNames ="evenCardNext"> 
          <EvenCard 
            cards = {this.calculateDisplayedCards()}
            index = {evenIndex}
            cardFlipped = {this.state.evenCardFlipped}
            handleCardFlip = {this.handleEvenCardFlip}
          />
        </CSSTransition>
        if(this.state.index > 0) {
          oddCard = <CSSTransition
            in={this.state.index % 2 === 1}
            appear = {true}
            timeout = {{
              enter: 400,
              exit: 400
            }}
            onEntered = {() => this.setState({nextCardRequested: false})}
            classNames ="oddCardNext"> 
          <OddCard 
            cards = {this.calculateDisplayedCards()}
            index = {oddIndex}
            cardFlipped = {this.state.oddCardFlipped}
            handleCardFlip = {this.handleOddCardFlip}
          />
          </CSSTransition>
        }


      } else if(this.state.previousCardRequested) {
        //define indexes for when the previous card is requested
        let evenIndex = this.state.index
        let oddIndex = this.state.index
        if(this.state.index % 2) {
          evenIndex = this.state.index + 1
        } else {
          oddIndex = this.state.index + 1
        }
        evenCard = <CSSTransition
          in={this.state.index % 2 === 0}
          //appear = {true}
          timeout = {{
            enter: 400,
            exit: 400
          }}
          onEntered = {() => this.setState({previousCardRequested: false})}
          classNames ="evenCardPrevious"> 
          <EvenCard 
            cards = {this.calculateDisplayedCards()}
            index = {evenIndex}
            cardFlipped = {this.state.evenCardFlipped}
            handleCardFlip = {this.handleEvenCardFlip}
            
          />
        </CSSTransition>

          oddCard = <CSSTransition
            in={this.state.index % 2 === 1}
            appear = {true}
            timeout = {{
              enter: 400,
              exit: 400
            }}
            onEntered = {() => this.setState({previousCardRequested: false})}
            classNames ="oddCardPrevious"> 
          <OddCard 
            cards = {this.calculateDisplayedCards()}
            index = {oddIndex}
            cardFlipped = {this.state.oddCardFlipped}
            handleCardFlip = {this.handleOddCardFlip}
          />
          </CSSTransition>
        }
      
    

      return (
        <div className = "page">
          <div className = "backgroundImage blur"/>
          <TopBar handleAddCardMenuClick = {this.handleAddCardMenuClick} handleCategoryMenuClick = {this.handleCategoryMenuClick}/>
          {categoryMenu}
          {addCardMenu}
          <LeftArrow handleClick = {this.handleLeftClick}/>
          <RightArrow handleClick = {this.handleRightClick}/>
          {evenCard}
          {oddCard}
          <div className = "attribution">
            Favicon from Andrian Valeanu<br />
            Favicon used under: https://creativecommons.org/licenses/by/3.0/legalcode
          </div>
        </div>
      )
    }
  }
}


export default App;
