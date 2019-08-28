//TO DO: create Fetch GET request to update the categories with categories change from Select Categories menu

import React from 'react';
import './App.css';
import cardsFromJSON from './cards.json'
import TopBar from './components/TopBar.js'
import NewCardMenu from './components/NewCardMenu.js'
import CategoryMenu from './components/CategoryMenu.js'
import Cards from './components/Cards.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false,
      index: 0,
      cards: [],
      categories: ['arrayMethods', 'stringMethods', 'react', 'es6'],
      categoryMenuOpen: false,
      newCardMenuOpen: false,
    }
  }

  componentDidMount() {
    this.fetchBasedOnCategories()
  }  

  fetchBasedOnCategories = () => {
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
        this.fetchBasedOnCategories()
      } else {
        alert("Must have at least one category")
      }
    } else {
      stateCategories.push(e.target.value)
      this.setState({categories: stateCategories})
      this.fetchBasedOnCategories()
    }

  }

  handleRightClick = () => {
    if(this.state.index < this.state.cards.length-1)
    this.setState({index: this.state.index + 1})
  }
  
  handleLeftClick = () => {
    if(this.state.index > 0) {
      this.setState({index: this.state.index - 1})
    }
  }

  calculateDisplayedCards = () => {
    let cardsDisplayed = [];
      //console.log(this.state.cards)
      //console.log(this.state.categories)
      for(let i = 0; i < this.state.cards.length; i++) {
        for(let j = 0; j < this.state.categories.length; j++) {
          //console.log(`state card category: ${this.state.cards[i].category}`)
          //console.log(`state category: ${this.state.categories[j]}`)
          if(this.state.cards[i].category == this.state.categories[j]) {
            cardsDisplayed.push(this.state.cards[i])
          }
        }
      }
    return cardsDisplayed
  }

  render() {
    if(!this.state.doneLoading) {
      return (<p>loading...</p>)
    } else {
      console.log(this.calculateDisplayedCards())
      let CategoryMenuCreate;
      if(this.state.categoryMenuOpen) {
        CategoryMenuCreate = <CategoryMenu categories = {this.state.categories} handleCategoryChange = {this.handleCategoryChange}/>;
      }

      let newCardMenu;
      if(this.state.newCardMenuOpen) {
        newCardMenu = <NewCardMenu />
      }  

      return (
        <div className = "page">
          <p>loading...</p>
          <TopBar handleNewCardMenuClick = {this.handleNewCardMenuClick} handleCategoryMenuClick = {this.handleCategoryMenuClick}/>
          {CategoryMenuCreate}
          {newCardMenu}
          <LeftArrow handleClick = {this.handleLeftClick}/>
          <RightArrow handleClick = {this.handleRightClick}/>
          <Cards cards = {this.calculateDisplayedCards()} index = {this.state.index} />
        </div>
      )
    }
  }
}

export default App;
