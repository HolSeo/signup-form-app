import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import Confirmation from '../components/Confirmation';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            firstName: '',
            email: '',
        }
    }

    handleSubmit = ({ firstName, email, status }) => {
        if (status) {
            this.setState({
                isLoggedIn: true,
                firstName,
                email,
            });
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let form;

        if (isLoggedIn) {
            form = <Confirmation email={this.state.email} firstName={this.state.firstName} />
        } else {
            form = <SignUpForm onSubmit={this.handleSubmit} />
        }
        return (
            <div className="FormContainer">
                {form}
            </div>
        );
    };
}

export default FormContainer;