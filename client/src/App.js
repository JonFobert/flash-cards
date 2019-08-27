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
      index: 0,
      categories: ['arrayMethods', 'stringMethods', 'react', 'es6'],
      categoryMenuOpen: false,
      newCardMenuOpen: false,
    }
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
      } else {
        alert("Must have at least one category")
      }
    } else {
      stateCategories.push(e.target.value)
      this.setState({categories: stateCategories})
    }

  }

  handleRightClick = () => {
    if(this.state.index < cardsFromJSON.length-1)
    this.setState({index: this.state.index + 1})
  }
  
  handleLeftClick = () => {
    if(this.state.index > 0) {
      this.setState({index: this.state.index - 1})
    }
  }

  render() {
    let cards = [];
    console.log(cardsFromJSON)
    console.log(this.state.categories)
    for(let i = 0; i < cardsFromJSON.length; i++) {
      for(let j = 0; j < this.state.categories.length; j++) {
        console.log(`cardFromJSON category: ${cardsFromJSON[i].category}`)
        console.log(`state category: ${this.state.categories[j]}`)
        if(cardsFromJSON[i].category == this.state.categories[j]) {
          cards.push(cardsFromJSON[i])
        }
      }
    }
    console.log(cards)

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
        <TopBar handleNewCardMenuClick = {this.handleNewCardMenuClick} handleCategoryMenuClick = {this.handleCategoryMenuClick}/>
        {CategoryMenuCreate}
        {newCardMenu}
        <LeftArrow handleClick = {this.handleLeftClick}/>
        <RightArrow handleClick = {this.handleRightClick}/>
        <Cards cards = {cards} index = {this.state.index} />
      </div>
    )
  }
}

export default App;
