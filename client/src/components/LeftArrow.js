import React from 'react';


class LeftArrow extends React.Component {
  handleClick = () => {
    this.props.handleClick()
  }

  render() {
    return (
        <div className = 'leftArrow' onClick={this.handleClick}>
            <p>&larr;</p>
        </div>
    )
  }
}

export default LeftArrow