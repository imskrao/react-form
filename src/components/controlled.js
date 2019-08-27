import React, { Component } from 'react';

class Controlled extends Component {

    state = {

    }

    render(){
        return(
            <div className="container">
                <div className="form_element">
                    <label htmlFor="first name">Enter the first name</label>
                    <input type="text"/>
                </div>

                <div className="form_element">
                    <label htmlFor="last name">Enter the last name</label>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Controlled;