import React from 'react';

const Input = ({ title, name, type, value, handleChange, errorMessage }) => {
    return (
        <div className="Input">
            <label className="Input__label" htmlFor={title}>{title}</label>
            <input className="Input__field"
                id={title}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
            />
            {errorMessage && (
                <span data-testid="error-message" className="Input__errorMessage">{errorMessage}</span>
            )}
        </div>
    );
}

export default Input;