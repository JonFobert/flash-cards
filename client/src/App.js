import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import TopBar from './components/TopBar.js'
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
        <LeftArrow/>
        <RightArrow/>
        <Cards/>
      </div>
    )
  }
}

export default App;
