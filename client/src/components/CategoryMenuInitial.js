import React from 'react'

class CategoryMenuInitial extends React.Component {
    constructor(props) {
        super(props)
    }

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
                    <input type="checkbox" name="category" id="arrayMethods" checked={this.isCategoryChecked('arrayMethods')} value="arrayMethods" onChange = {this.handleFormChange}/>
                    <label htmlFor="arrayMethods">Array Methods</label>
                    <br/>
                    <input type="checkbox" name="category" id="stringMethods" checked={this.isCategoryChecked('stringMethods')} value="stringMethods" onChange = {this.handleFormChange}/>
                    <label htmlFor="stringMethods">String Methods</label>
                    <br/>
                    <input type="checkbox" name="category" id="react" checked={this.isCategoryChecked('react')} value="react" onChange = {this.handleFormChange}/>
                    <label htmlFor="react">React</label>
                    <br/>
                    <input type="checkbox" name="category" id="es6" checked={this.isCategoryChecked('es6')} value="es6" onChange = {this.handleFormChange}/>
                    <label htmlFor="es6">ES6</label>
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