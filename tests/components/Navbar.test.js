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
  apiKey: "AIzaSyBVHmKBMBp2DTgKdw5m2_V3YvABLSDZGvY",
  authDomain: "noco2-e46fa.firebaseapp.com",
  projectId: "noco2-e46fa",
  storageBucket: "noco2-e46fa.appspot.com",
  messagingSenderId: "132897901391",
  appId: "1:132897901391:web:9b4e1576f845a10a60133a",
  measurementId: "G-TWKRL8G2KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
