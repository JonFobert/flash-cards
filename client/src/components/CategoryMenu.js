import React from 'react'

class CategoryMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    isCategoryChecked = (category) => {
        console.log(this.props.categories.includes(category))
        return this.props.categories.includes(category)
    }

    handleFormChange = (e) => {
        this.props.handleCategoryChange(e)
    }

    render() {
        
        return(
            <div className = "categoryMenu">
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
                </form>
            </div>
        )
    }
}

export default CategoryMenu