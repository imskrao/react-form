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
                    },
                    validation: {
                        required: true,
                        minLen: '3'
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
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
                    },
                    validation: {
                        required: true,
                        minLen: '3'
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
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
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
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
                    },
                    validation: {
                        required: false
                    },
                    valid: true
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
                    },
                    validation: {
                        required: false
                    },
                    valid: true
                }
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;

            // console.log(this.state.formData[key].valid);
        }

        if(formIsValid) {
            console.log(dataToSubmit);
        }
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
                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;