import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUpForm from '../SignUpForm';

test('Submits successfully with correct first name, email, and password values with no error message.', () => {
    const onSubmit = jest.fn();
    const firstName = 'test';
    const email = 'test@test.com';
    const password = 'test123';
    const { getByLabelText, getByTestId, queryByTestId } = render(<SignUpForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/First Name/i), {
        target: { value: firstName }
    })

    fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: email }
    })

    fireEvent.change(getByLabelText(/Password/i), {
        target: { value: password }
    })

    fireEvent.click(getByTestId(/signup-button/i));

    expect(queryByTestId(/error-message/i)).not.toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('Does not submit with empty first name, email, and password values and renders error message.', () => {
    const onSubmit = jest.fn();
    const firstName = '';
    const email = '';
    const password = '';
    const { getByLabelText, getByTestId, queryByTestId } = render(<SignUpForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/First Name/i), {
        target: { value: firstName }
    })

    fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: email }
    })

    fireEvent.change(getByLabelText(/Password/i), {
        target: { value: password }
    })

    fireEvent.click(getByTestId(/signup-button/i));

    expect(queryByTestId(/error-message/i)).toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(0);
});

test('Does not submit with incorrect first name value and renders error message.', () => {
    const onSubmit = jest.fn();
    const firstName = '';
    const email = 'test@test.com';
    const password = 'test123';
    const { getByLabelText, getByTestId, queryByTestId } = render(<SignUpForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/First Name/i), {
        target: { value: firstName }
    })

    fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: email }
    })

    fireEvent.change(getByLabelText(/Password/i), {
        target: { value: password }
    })

    fireEvent.click(getByTestId(/signup-button/i));

    expect(queryByTestId(/error-message/i)).toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(0);
});

test('Does not submit with incorrect email value and renders error message.', () => {
    const onSubmit = jest.fn();
    const firstName = 'Test first name';
    const email = '';
    const password = 'test123';
    const { getByLabelText, getByTestId, queryByTestId } = render(<SignUpForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/First Name/i), {
        target: { value: firstName }
    })

    fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: email }
    })

    fireEvent.change(getByLabelText(/Password/i), {
        target: { value: password }
    })

    fireEvent.click(getByTestId(/signup-button/i));

    expect(queryByTestId(/error-message/i)).toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(0);
});

test('Does not submit with incorrect password value and renders error message.', () => {
    const onSubmit = jest.fn();
    const firstName = 'Test first name';
    const email = 'test@test.com';
    const password = '';
    const { getByLabelText, getByTestId, queryByTestId } = render(<SignUpForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/First Name/i), {
        target: { value: firstName }
    })

    fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: email }
    })

    fireEvent.change(getByLabelText(/Password/i), {
        target: { value: password }
    })

    fireEvent.click(getByTestId(/signup-button/i));

    expect(queryByTestId(/error-message/i)).toBeTruthy();
    expect(onSubmit).toHaveBeenCalledTimes(0);
});
