import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../../src/components/Introduction/About';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../src/assets/AboutBg.jpg', () => 'path/to/AboutBg.jpg');
jest.mock('../../../src/assets/About/Aboutctse.jpg', () => 'path/to/Aboutctse.jpg');
jest.mock('../../../src/assets/About/Aboutluc.jpg', () => 'path/to/Aboutluc.jpg');
jest.mock('../../../src/assets/About/Github_black.png', () => 'path/to/Github_black.png');
jest.mock('../../../src/assets/About/LinkedIN.png', () => 'path/to/LinkedIN.png');
jest.mock('../../../src/assets/noco2-logo.png', () => 'path/to/noco2-logo.png');

test('renders About component', () => {
  render(
    <About />
  );

  // Assert the presence of specific text content in the component
  const textContent2 = screen.getByText('Developers');
  expect(textContent2).toBeInTheDocument();

  // Assert the presence of specific images in the component
  const iconImage = screen.getByAltText('Icon');
  expect(iconImage).toBeInTheDocument();

  const aboutCtseImage = screen.getByAltText('Cheuk Hang Tse img');
  expect(aboutCtseImage).toBeInTheDocument();

  const aboutLucImage = screen.getByAltText('Luc Debaupte img');
  expect(aboutLucImage).toBeInTheDocument();

  // Assert the presence of specific links in the component
  const frontEndRepoLink = screen.getByText('Front-End Repository');
  expect(frontEndRepoLink).toBeInTheDocument();

  const backEndRepoLink = screen.getByText('Back-End Repository');
  expect(backEndRepoLink).toBeInTheDocument();
});
