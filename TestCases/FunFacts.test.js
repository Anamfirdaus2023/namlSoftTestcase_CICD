import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FunFacts from '../components/Common/FunFacts';

describe('FunFacts Component', () => {
  beforeEach(() => {
    // Reset mocks before each test (if any)
    jest.clearAllMocks();
  });

  test('renders the fun facts section', () => {
    render(<FunFacts />);
    // Query by class name using a custom query
    const funFactsSection = document.querySelector('.fun-facts-area');
    expect(funFactsSection).toBeInTheDocument();
    expect(funFactsSection).toHaveClass('fun-facts-area pt-100 pb-70');
  });

  test('renders all four fun fact items', () => {
    render(<FunFacts />);
    const funFactItems = screen.getAllByRole('heading', { level: 3 });
    expect(funFactItems).toHaveLength(4);

    // Verify the numbers
    expect(funFactItems[0]).toHaveTextContent('950');
    expect(funFactItems[1]).toHaveTextContent('150');
    expect(funFactItems[2]).toHaveTextContent('550');
    expect(funFactItems[3]).toHaveTextContent('750');
  });

  test('renders correct descriptions for fun fact items', () => {
    render(<FunFacts />);
    const descriptions = screen.getAllByText(/Completed Project|Happy Clients|Multi Services|Winning Awards/);
    expect(descriptions).toHaveLength(4);

    expect(descriptions[0]).toHaveTextContent('Completed Project');
    expect(descriptions[1]).toHaveTextContent('Happy Clients');
    expect(descriptions[2]).toHaveTextContent('Multi Services');
    expect(descriptions[3]).toHaveTextContent('Winning Awards');
  });

  test('renders icons for each fun fact item', () => {
    render(<FunFacts />);
    // Query icons by their class names
    const icons = document.querySelectorAll('.flaticon-check, .flaticon-happy, .flaticon-technical-support, .flaticon-trophy');
    expect(icons).toHaveLength(4);

    expect(icons[0]).toHaveClass('flaticon-check');
    expect(icons[1]).toHaveClass('flaticon-happy');
    expect(icons[2]).toHaveClass('flaticon-technical-support');
    expect(icons[3]).toHaveClass('flaticon-trophy');
  });
});