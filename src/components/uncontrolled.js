import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = (event) => {
        event.preventDefault();

        const values = {
            firstname: this.firstname.value,
            lastname: this.lastname.value
        }

        console.log(values);
    }

    render(){
        return(
            <div className="container">
                <div className="form_element">
                    <label htmlFor="first name">Enter the first name</label>
                    <input type="text" ref={input => this.firstname = input}/>
                </div>

                <div className="form_element">
                    <label htmlFor="last name">Enter the last name</label>
                    <input type="text" ref={input => this.lastname = input}/>
                </div>
                <button onClick={this.handleSubmitClick}>Register</button>
            </div>
        )
    }
}

export default Uncontrolled;