import React from 'react';
import SignInButton from './SignInButton';

const Confirmation = ({ firstName, email }) => {
    return (
        <div className="Confirmation">
            <h2>Welcome</h2>
            <h1>{firstName}!</h1>
            <p>You have been registered for this awesome service. <br /> Please check your email listed below for instructions.</p>
            <p className="Confirmation__email">{email}</p>
            <SignInButton />
        </div>
    )
}

export default Confirmation;