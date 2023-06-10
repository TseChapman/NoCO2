import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

// Mock the useLocation and useNavigate hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Sign Up and Login buttons on the home page', () => {
    // Mock the location.pathname to be '/'
    const mockLocation = { pathname: '/NoCO2/' };
    jest.spyOn(React, 'useLocation').mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders Sign Out button on the dashboard page', () => {
    // Mock the location.pathname to be '/dashboard'
    const mockLocation = { pathname: '/NoCO2/dashboard' };
    jest.spyOn(React, 'useLocation').mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('renders Back button on the activities page', () => {
    // Mock the location.pathname to be '/dashboard/activities'
    const mockLocation = { pathname: '/NoCO2/dashboard/activities' };
    jest.spyOn(React, 'useLocation').mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
