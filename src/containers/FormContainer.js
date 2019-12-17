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

    handleSubmit = (event) => {
        // Handle Form Submission
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let form;

        if (isLoggedIn) {
            form = <Confirmation email={this.state.email} firstName={this.state.firstName} />
        } else {
            form = <SignUpForm />
        }
        return (
            <div className="FormContainer">
                {form}
            </div>
        );
    };
}

export default FormContainer;