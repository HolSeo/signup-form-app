import React from 'react';
import { render } from '@testing-library/react';
import Input from '../Input';

test('Renders correct title text with no error.', () => {
    const titleText = 'Test First Name';
    const { getByText, queryByTestId } = render(<Input title={titleText} />);
    getByText(titleText);
    expect(queryByTestId(/error-message/i)).not.toBeTruthy();
});

test('Renders correct error message', () => {
    const errorMessage = 'Test Error Message';
    const { queryByTestId } = render(<Input errorMessage={errorMessage} />);
    queryByTestId(errorMessage);
});
