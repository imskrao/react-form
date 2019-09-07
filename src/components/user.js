import React, { Component } from 'react';
import FormFields from '../widgets/form/formfields';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                firstName: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'First Name',
                    config: {
                        name: 'firstname_input',
                        type: 'text',
                        placeholder: 'Enter your first name'
                    }
                },
                lastName: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Last Name',
                    config: {
                        name: 'lastname_input',
                        type: 'text',
                        placeholder: 'Enter your last name'
                    }
                },
                email: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Email Address',
                    config: {
                        name: 'email_input',
                        type: 'email',
                        placeholder: 'Enter your Email Address'
                    }
                }
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit);
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields formData={this.state.formData} change={(newState) => this.updateForm(newState)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;