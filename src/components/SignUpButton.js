import React from 'react';

const SignUpButton = ({ onClick }) => {
    return (
        <div className="SignUpButton">
            <button className="SignUpButton__button" onClick={onClick}>
                Sign Up
            </button>
        </div>
    );
}

export default SignUpButton;