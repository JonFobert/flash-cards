import React from 'react'

class AddCardMenu extends React.Component {
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

    handleClose = (e) => {
        this.props.handleCloseAddCardMenu()
    }

    render() {
        return (
            <div className="newCardMenu">
                <div className = "close" onClick = {this.handleClose}>X</div>
                <h2>Add Card</h2>
                <form onSubmit={this.handleFormSubmit} >
                    <select id='category' required onChange={this.handleCategoryChange}>
                        <option value="">Select a Category</option>
                        <option value="tv">TV</option>
                        <option value="movies">Movies</option>
                        <option value="bodiesOfWater">Bodies of Water</option>
                        <option value="stateCapitals">State Capitals</option>
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
                    <input type="submit" id="newCardSubmit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddCardMenu