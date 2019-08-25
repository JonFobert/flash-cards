import React from 'react'

class NewCardMenu extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className = "newCardMenu">
          <h2>New Card:</h2>
          <form>
              <select id='category' required>
                <option value="">Select a Category</option>
                <option value="arrayMethods">Array Methods</option>
                <option value="stringMethods">String Methods</option>
                <option value="react">React</option>
                <option value="es6">ES6</option>
              </select>
              <br/>
              <label for="questionText" >Enter Question Text:</label>
              <textarea id="questionText" name = "questionText" rows="5" cols="33">
              </textarea>
              <br/>
              <label for="answerText" >Enter Answer Text:</label>
              <br/>
              <textarea id="answerText" name = "answerText" rows="5" cols="33">
              </textarea>
          </form>
    </div>
      )
    }
  }

export default NewCardMenu