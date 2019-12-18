import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from '../Confirmation';

test('Renders correct first name and email.', () => {
    const firstName = 'Test First Name';
    const email = 'Test Email@test.com';
    const { getByText } = render(<Confirmation firstName={firstName} email={email} />);
    getByText(firstName + '!');
    getByText(email);
});

test('Renders correct lowercased first name.', () => {
    const firstName = 'test First Name';
    const email = 'Test Email@test.com';
    const { getByText } = render(<Confirmation firstName={firstName} email={email} />);
    getByText('Test First Name!');
    getByText(email);
});
