import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import { initializeApp } from "firebase/app";
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

jest.mock('../../src/assets/Icon.png', () => 'path/to/Icon.png');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

describe('Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Sign Up and Login buttons on the home page', () => {
    const mockLocation = { pathname: '/NoCO2/' };
    useLocation.mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders Sign Out button on the dashboard page', () => {
    const mockLocation = { pathname: '/NoCO2/dashboard' };
    useLocation.mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('renders Back button on the activities page', () => {
    const mockLocation = { pathname: '/NoCO2/dashboard/activities' };
    useLocation.mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
