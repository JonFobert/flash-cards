import React from 'react';
import './App.css';
import TopBar from './components/TopBar.js'
import NewCardMenu from './components/NewCardMenu.js'
import Cards from './components/Cards.js'
import LeftArrow from './components/LeftArrow.js'
import RightArrow from './components/RightArrow.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "page">
        <TopBar/>
        
        <NewCardMenu/>
        <SelectCategory/>
        
        <LeftArrow/>
        <RightArrow/>
        <Cards/>
      </div>
    )
  }
}

export default App;
