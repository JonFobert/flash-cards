import React from 'react';

class LeftArrow extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <div className = 'leftArrow'>
              <p>Back</p>
          </div>
      )
    }
}

export default LeftArrow