import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactInfo from '../components/Contact/ContactInfo';

describe('ContactInfo Component', () => {
  test('renders the corporate office information', () => {
    render(<ContactInfo />);

    // Check for the corporate office title
    expect(screen.getByText(/Corporate Office India/i)).toBeInTheDocument();

    // Check for the corporate office address
    expect(
      screen.getByText(/8th Floor, World Trade Centre, Unit No.801/i)
    ).toBeInTheDocument();
  });

  test('renders the USA office information', () => {
    render(<ContactInfo />);

    // Check for the USA office title
    expect(screen.getByText(/USA Sales & Marketing Office/i)).toBeInTheDocument();

    // Check for the USA office address
    expect(
      screen.getByText(/25309, Wykrshire Rd , Farmington Hills Michigan/i)
    ).toBeInTheDocument();
  });

  test('renders the email information', () => {
    render(<ContactInfo />);

    // Check for the email title
    expect(screen.getByText(/Email/i)).toBeInTheDocument();

    // Check for the email address
    expect(screen.getByText(/contactus@namlsoft.com/i)).toBeInTheDocument();
  });

  test('renders the map iframes', () => {
    render(<ContactInfo />);

    // Check for the first iframe
    const iframes = document.querySelectorAll('iframe');
    expect(iframes).toHaveLength(2); // Assuming there are 2 iframes
    expect(iframes[0]).toBeInTheDocument();
    expect(iframes[1]).toBeInTheDocument();
  });
});