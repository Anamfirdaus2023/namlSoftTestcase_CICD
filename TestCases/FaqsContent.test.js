import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqsContent from '../components/Faqs/FaqsContent';

describe('FaqsContent Component', () => {
  test('renders the FAQ section title and description', () => {
    render(<FaqsContent />);

    // Check for the section title by querying the parent container
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toHaveTextContent('Frequently Asked Questions');

    // Check for the section description
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida./i
      )
    ).toBeInTheDocument();
  });

  test('renders all accordion items', () => {
    render(<FaqsContent />);

    // Check for all accordion item headings
    expect(screen.getByText(/What access do I have on the free plan\?/i)).toBeInTheDocument();
    expect(screen.getByText(/What access do I have on a free trial\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Does the price go up as my team gets larger\?/i)).toBeInTheDocument();
    expect(screen.getByText(/How can I cancel my subscription\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Can I pay via an Invoice\?/i)).toBeInTheDocument();
  });

  test('renders the FAQ image', () => {
    render(<FaqsContent />);

    // Check for the FAQ image
    const faqImage = screen.getByAltText(/image/i);
    expect(faqImage).toBeInTheDocument();
    expect(faqImage).toHaveAttribute('src', '/images/faq.png');
  });
});