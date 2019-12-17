import React from 'react';

const SignInButton = ({ onClick }) => {
    return (
        <div className="SignInButton">
            <button className="SignInButton__button" onClick={onClick}>
                Sign In
            </button>
        </div>
    );
}

export default SignInButton;