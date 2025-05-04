import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from './Features';

describe('Features Component', () => {
  test('renders the Features component with all elements', () => {
    render(<Features />);

    // Check for the section title
    expect(screen.getByText(/Creative Features/i)).toBeInTheDocument();

    // Check for the section description using a more flexible approach
    const sectionDescription = screen.getByText((content) =>
      content.includes(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
      )
    );
    expect(sectionDescription).toBeInTheDocument();

    // Check for the feature items
    expect(screen.getByText(/Great Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Optimal Choice/i)).toBeInTheDocument();
    expect(screen.getByText(/Finest Quality/i)).toBeInTheDocument();
    expect(screen.getByText(/Time Saving/i)).toBeInTheDocument();

    // Check for the feature descriptions
    expect(
      screen.getAllByText(
        /Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt/i
      ).length
    ).toBe(4);

    // Check for the icons by their class names
    expect(document.querySelector('.flaticon-blueprint')).toBeInTheDocument();
    expect(document.querySelector('.flaticon-update')).toBeInTheDocument();
    expect(document.querySelector('.flaticon-security')).toBeInTheDocument();
    expect(document.querySelector('.flaticon-clock')).toBeInTheDocument();
  });
});