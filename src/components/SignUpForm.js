import React, { Component } from 'react';
import Input from './Input';

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
        };
    }

    handleFormSubmit = (event) => {
        // Form submit logic goes here.
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
                formErrors[name] = value.length > 5 ? '' : 'Email not valid.';
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
            </div>
        )
    }
}

export default SignUpForm;