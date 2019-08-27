import React, { Component } from 'react';

class Controlled extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    submitHandler =(event) => {
        event.preventDefault();

        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div className="form_element">
                        <label htmlFor="first name">Enter the first name</label>
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
                        />
                    </div>

                    <div className="form_element">
                        <label htmlFor="last name">Enter the last name</label>
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Controlled;