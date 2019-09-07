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
                },
                age: {
                    element: 'select',
                    value: '',
                    label: true,
                    labelText: 'Age',
                    config: {
                        name: 'age_input',
                        options: [
                            {val:'1', text: '10-20'},
                            {val:'2', text: '20-30'},
                            {val:'3', text: '30+'}
                        ]
                    }
                },
                message: {
                    element: 'textarea',
                    value: '',
                    label: true,
                    labelText: 'Message',
                    config: {
                        name: 'message_input',
                        rows: 4,
                        cols:36
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