import React, { Component } from 'react';
import Input from './Input';

const validateEmail = (email) => {
    // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegex.test(email);
}

const validForm = ({ formErrors, firstName, email, password }) => {
    let status = true;
    if (!firstName.length || !email.length || !password.length) {
        return false;
    }

    Object.values(formErrors).forEach(value => {
        if (value.length > 0) {
            status = false;
        }
    });
    return status;
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            email: '',
            password: '',
            formErrors: {
                firstName: '',
                email: '',
                password: '',
            },
            errorMessage: '',
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (validForm(this.state)) {
            console.log('VALID FORM!')
        } else {
            this.setState({
                errorMessage: 'Missing Required Fields.',
            })
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let { name, value } = event.target;
        value = value.trim();

        const { formErrors } = this.state;
        switch (name) {
            case 'firstName':
                formErrors[name] = value.length < 1 ? 'First Name: Required' : '';
                break;
            case 'email':
                formErrors[name] = validateEmail(value) ? '' : 'Email not valid.';
                break;
            case 'password':
                formErrors[name] = value.length < 5 ? 'Password minimun length: 5' : '';
                break;
            default:
                break;
        }
        this.setState({
            formErrors,
            [name]: value,
        });

        if (validForm(this.state)) {
            this.setState({
                'errorMessage': '',
            })
        }
    }
    render() {
        return (
            <div className="SignUpForm">
                <header>
                    <h2>Let's</h2>
                    <h1>Sign Up</h1>
                    <p>Use the form below to sign up for this super awesome service. <br /> You're only a few steps away!</p>
                </header>
                <form onSubmit={this.handleFormSubmit}>
                    <Input type='text' title='First Name' name="firstName" value={this.state.firstName} handleChange={this.handleChange} />
                    <Input type='text' title='Email Address' name="email" value={this.state.email} handleChange={this.handleChange} />
                    <Input type='password' title='Password' name="password" value={this.state.password} handleChange={this.handleChange} />
                    <button>Sign Up Button</button>
                </form>
                {this.state.errorMessage && (
                    <p className="SignUpForm__errorMessage">{this.state.errorMessage}</p>
                )}
            </div>
        )
    }
}

export default SignUpForm;