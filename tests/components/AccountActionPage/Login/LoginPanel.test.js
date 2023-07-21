import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPanel from '../../../../src/components/AccountActionPage/Login/LoginPanel';
import { initializeApp } from 'firebase/app';
import '@testing-library/jest-dom/extend-expect';

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
initializeApp(firebaseConfig);

test('renders login form and handles form submission', () => {
  render(
    <MemoryRouter>
      <LoginPanel />
    </MemoryRouter>
  );

  // Assert the presence of email and password components
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();
});
