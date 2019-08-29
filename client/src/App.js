//TO DO: Start with Joana Yellow and select categories Window. Then blur when a category is selected
//Consider CSS blur() and transition
//transition slide from left to right && right to left?

import React from 'react';
import './App.css';
import CategoryMenuInitial from './components/CategoryMenuInitial.js'
import TopBar from './components/TopBar.js'
import NewCardMenu from './components/NewCardMenu.js'
import CategoryMenu from './components/CategoryMenu.js'
import Cards from './components/Cards.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false,
      initialCategoriesSelected: false,
      index: 0,
      cards: [],
      categories: ['arrayMethods', 'stringMethods', 'react', 'es6'],
      categoryMenuOpen: false,
      newCardMenuOpen: false,
      cardFlipped: false
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

  handleNewCardMenuClick = () => {
    this.setState({newCardMenuOpen: !this.state.newCardMenuOpen})
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
  }

  handleRightClick = () => {
    if(this.state.index < this.state.cards.length-1)
    this.setState({index: this.state.index + 1, cardFlipped: false})
  }
  
  handleLeftClick = () => {
    if(this.state.index > 0) {
      this.setState({index: this.state.index - 1})
    }
  }

  /*******handle flipping cards******** */
  handleCardFlip = () => {
    this.setState({cardFlipped: !this.state.cardFlipped})
  }



  calculateDisplayedCards = () => {
    let cardsDisplayed = [];
      for(let i = 0; i < this.state.cards.length; i++) {
        for(let j = 0; j < this.state.categories.length; j++) {
          if(this.state.cards[i].category == this.state.categories[j]) {
            cardsDisplayed.push(this.state.cards[i])
          }
        }
      }
    return cardsDisplayed
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
      console.log(this.calculateDisplayedCards())
      let CategoryMenuCreate;
      if(this.state.categoryMenuOpen) {
        CategoryMenuCreate = <CategoryMenu categories = {this.state.categories} handleCategoryChange = {this.handleCategoryChange}/>;
      }

      let newCardMenu;
      if(this.state.newCardMenuOpen) {
        newCardMenu = <NewCardMenu handleNewCard = {this.handleNewCard} />
      }  

      return (
        <div className = "page">
          <div className = "backgroundImage blur"/>
          <TopBar handleNewCardMenuClick = {this.handleNewCardMenuClick} handleCategoryMenuClick = {this.handleCategoryMenuClick}/>
          {CategoryMenuCreate}
          {newCardMenu}
          <LeftArrow handleClick = {this.handleLeftClick}/>
          <RightArrow handleClick = {this.handleRightClick}/>
          <Cards cards = {this.calculateDisplayedCards()} index = {this.state.index} cardFlipped = {this.state.cardFlipped} handleCardFlip = {this.handleCardFlip}/>
        </div>
      )
    }
  }
}

export default App;
