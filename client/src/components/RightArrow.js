import React from 'react'

class RightArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = () => {
    this.props.handleClick()
  }

  render() {
    return (
      <div className = "rightArrow" onClick={this.handleClick}>
        <p>Next</p>
      </div>
    );
  };
};

export default RightArrow