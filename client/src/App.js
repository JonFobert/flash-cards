import React from 'react';
import './App.css';
import TopBar from './components/TopBar.js'
import NewCardMenu from './components/NewCardMenu.js'
import CategoryMenu from './components/CategoryMenu.js'
import Cards from './components/Cards.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0, currentCategory: 'all', categoryMenuOpen: false, newCardMenuOpen: false}
  }

  handleCategoryMenuClick = () => {
    this.setState({categoryMenuOpen: !this.state.categoryMenuOpen})
  }

  handleNewCardMenuClick = () => {
    this.setState({newCardMenuOpen: !this.state.newCardMenuOpen})
  }

  handleRightClick = () => {
    this.setState({index: this.state.index + 1})
  }

  handleLeftClick = () => {
    this.setState({index: this.state.index - 1})
  }

  render() {
    let CategoryMenuCreate;
    if(this.state.categoryMenuOpen) {
      CategoryMenuCreate = <CategoryMenu />;
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
        <Cards index = {this.state.index} />
      </div>
    )
  }
}

export default App;
