import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPanel from '../../../../src/components/AccountActionPage/Login/LoginPanel';
import { initializeApp } from 'firebase/app';
import '@testing-library/jest-dom/extend-expect';

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
