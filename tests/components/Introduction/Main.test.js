import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from '../../../src/components/Introduction/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../src/assets/BackgroundImage.jpg', () => 'path/to/BackgroundImage.jpg');
jest.mock('../../../src/assets/Logo2.png', () => 'path/to/Logo2.png');


describe('Main', () => {
  it('renders the main component with the correct content', () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    const shapeTheFutureElement = screen.getByText('Shape the Future!');
    expect(shapeTheFutureElement).toBeInTheDocument();

    const hitNetZeroElement = screen.getByText('Lets hit net zero CO2 in 2050');
    expect(hitNetZeroElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Lets Get Started');
    expect(buttonElement).toBeInTheDocument();
  });
});
