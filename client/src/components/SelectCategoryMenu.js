import React from 'react'

class SelectCategoryMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className = "categoryMenu">
                <h2>Select Categories</h2>
                <form>
                    <input type="checkbox" name="arrayMethods"/>
                    <label for="arrayMethods">Array Methods</label>
                    <br/>
                    <input type="checkbox" name="String Methods" />
                    <label for="stringMethods">String Methods</label>
                    <br/>
                    <input type="checkbox" name="react" />
                    <label for="react">React</label>
                    <br/>
                    <input type="checkbox" name="es6" />
                    <label for="es6">ES6</label>
                </form>
            </div>
        )
    }
}

export default SelectCategoryMenu