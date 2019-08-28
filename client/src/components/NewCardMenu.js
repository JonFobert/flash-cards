import React from 'react'

class NewCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategory: '',
            questionText: '',
            answerText: ''
        }
    }

    handleCategoryChange = (e) => {
        this.setState({newCategory: e.target.value})
    }
    handleQuestionChange = (e) => {
        this.setState({questionText: e.target.value})
    }
    handleAnswerChange = (e) => {
        this.setState({answerText: e.target.value})
    }

    handleFormSubmit = (e) => {
        this.props.handleNewCard(e, this.state)
    }

    render() {
        return (
            <div className="newCardMenu">
                <h2>New Card</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <select id='category' required onChange={this.handleCategoryChange}>
                        <option value="">Select a Category</option>
                        <option value="arrayMethods">Array Methods</option>
                        <option value="stringMethods">String Methods</option>
                        <option value="react">React</option>
                        <option value="es6">ES6</option>
                    </select>
                    <br />
                    <label htmlFor="questionText" >Enter Question Text:</label>
                    <br />
                    <textarea required id="questionText" name="questionText" rows="5" cols="33" onChange = {this.handleQuestionChange}>
                    </textarea>
                    <br />
                    <label htmlFor="answerText">Enter Answer Text:</label>
                    <br />
                    <textarea required id="answerText" name="answerText" rows="5" cols="33" onChange = {this.handleAnswerChange}>
                    </textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewCardMenu