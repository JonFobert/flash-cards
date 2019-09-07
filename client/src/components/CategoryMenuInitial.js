import React from 'react'

class CategoryMenuInitial extends React.Component {
    isCategoryChecked = (category) => {
        return this.props.categories.includes(category)
    }

    handleFormChange = (e) => {
        this.props.handleCategoryChange(e)
    }

    handleFormSubmit = (e) => {
        this.props.handleInitialCategories(e)
    }

    render() {
        
        return(
            <div className = "categoryMenuInitial">
                <h2>Select Categories</h2>
                <form>
                    <input type="checkbox" name="category" id="tv" checked={this.isCategoryChecked('tv')} value="tv" onChange = {this.handleFormChange}/>
                    <label htmlFor="tv">TV</label>
                    <br/>
                    <input type="checkbox" name="category" id="movies" checked={this.isCategoryChecked('movies')} value="movies" onChange = {this.handleFormChange}/>
                    <label htmlFor="movies">Movies</label>
                    <br/>
                    <input type="checkbox" name="category" id="bodiesOfWater" checked={this.isCategoryChecked('bodiesOfWater')} value="bodiesOfWater" onChange = {this.handleFormChange}/>
                    <label htmlFor="bodiesOfWater">Bodies of Water</label>
                    <br/>
                    <input type="checkbox" name="category" id="stateCapitals" checked={this.isCategoryChecked('stateCapitals')} value="stateCapitals" onChange = {this.handleFormChange}/>
                    <label htmlFor="stateCapitals">State Capitals</label>
                    <br />
                </form>
                <div className="buttonHolder">
                    <button id="initialSubmit" onClick = {this.handleFormSubmit}>Start!</button>
                </div>
            </div>
        )
    }
}

export default CategoryMenuInitial