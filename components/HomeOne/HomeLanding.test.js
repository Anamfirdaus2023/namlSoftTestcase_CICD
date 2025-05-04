import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeLanding from './HomeLanding';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

// Mock i18next translation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('HomeLanding Component', () => {
  test('renders the HomeLanding component with all elements', () => {
    render(<HomeLanding t={(key) => key} />);

    // Check for the title
    expect(screen.getByText(/Unlock Potential with/i)).toBeInTheDocument();
    expect(screen.getByText(/NamlSoft/i)).toBeInTheDocument();

    // Check for the description
    expect(screen.getByText(/comprehensive-suite/i)).toBeInTheDocument();

    // Check for the "Get a Quote" button
    const link = screen.getByRole('link', { name: /Get a Quote/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/contact');
  });
});