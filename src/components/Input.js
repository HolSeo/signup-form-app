import React from 'react';

const Input = ({ title, name, type, value, handleChange }) => {
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
        </div>
    );
}

export default Input;