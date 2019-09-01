import React from 'react';

class NewCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isNewCardMenuOpen: false}
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        return(
            <h3 className = "newCard" onClick = {this.handleClick}>Add Card</h3>
        )
    }
}

class SelectCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isSelectCategoryMenuOpen: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        return(
            <h3 className = "selectCategory" onClick = {this.handleClick}>Select Categories</h3>
        )
    }
}

function GitHubLink(props) {
    return(
        <div className = "githubLink">
            <a href = 'https://github.com/JonFobert'>
                <img src = '../assets/githubLogo.png' alt = "link to Jon Fobert's Github"></img>
            </a>
            <a href = 'https://github.com/JonFobert'>/JonFobert</a>
        </div>
    )
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="topBar">
            <GitHubLink/>
            <div className= "menuActions">
                <NewCard handleClick = {this.props.handleAddCardMenuClick}/>
                <SelectCategory handleClick = {this.props.handleCategoryMenuClick}/>
            </div>
        </nav>
    )
  }
}

export default TopBar;