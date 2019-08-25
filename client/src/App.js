import React from 'react';
import './App.css';
import TopBar from './components/TopBar.js'
import NewCardMenu from './components/NewCardMenu.js'
import SelectCategoryMenu from './components/SelectCategoryMenu.js'
import Cards from './components/Cards.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0, currentCategory: 'all', categoryMenuSelected: true}
  }

  handleSelectCategoryClick = () => {
    this.setState({categorySelected: true})
  }

  render() {
    {/*
    let SelectCategoryMenu
    if(this.state.categoryMenuSelected) {
      SelectCategoryMenu = <SelectCategoryMenu />
    }
  */}
    return (
      <div className = "page">
        <TopBar handleSelectCategoryClick = {this.handleSelectCategoryClick}/>
        {
        /*<NewCardMenu/>*/
        }
        <SelectCategoryMenu />
        <LeftArrow/>
        <RightArrow/>
        <Cards index = {this.state.index} />
      </div>
    )
  }
}

export default App;
