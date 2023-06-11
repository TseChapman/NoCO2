import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomAlert from '../../src/components/CustomAlert';
import '@testing-library/jest-dom/extend-expect';

describe('CustomAlert', () => {
  it('renders the alert with the provided message when visible', () => {
    const message = 'This is an alert message';
    render(<CustomAlert message={message} />);

    const alertElement = screen.getByText(message);
    expect(alertElement).toBeInTheDocument();
  });
});