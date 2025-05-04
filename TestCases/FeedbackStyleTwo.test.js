import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';

// Mock react-owl-carousel3
jest.mock('react-owl-carousel3', () => {
  return jest.fn(({ children }) => <div data-testid="owl-carousel">{children}</div>);
});

// Mock next/dynamic to bypass dynamic imports
jest.mock('next/dynamic', () => () => {
  return jest.fn(({ children }) => <div data-testid="owl-carousel">{children}</div>);
});

describe('FeedbackStyleTwo Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders the section title and description', () => {
    render(<FeedbackStyleTwo />);
    expect(screen.getByText(/What Our Clients Says/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida./i
      )
    ).toBeInTheDocument();
  });

  test('renders client feedback items after component mounts', async () => {
    // Wrap render in act to handle state updates
    await act(async () => {
      render(<FeedbackStyleTwo />);
    });

    const clientNames = screen.getAllByRole('heading', { level: 3 });
    expect(clientNames).toHaveLength(3);
    expect(clientNames[0]).toHaveTextContent('Moris Jacker');
    expect(clientNames[1]).toHaveTextContent('Alex Maxwel');
    expect(clientNames[2]).toHaveTextContent('Edmond Halley');

    const clientRoles = screen.getAllByText(/Web Developer|Agent Management|Web Designer/);
    expect(clientRoles).toHaveLength(3);
    expect(clientRoles[0]).toHaveTextContent('Web Developer');
    expect(clientRoles[1]).toHaveTextContent('Agent Management');
    expect(clientRoles[2]).toHaveTextContent('Web Designer');
  });

  test('renders the OwlCarousel component after component mounts', async () => {
    // Wrap render in act to handle state updates
    await act(async () => {
      render(<FeedbackStyleTwo />);
    });

    expect(screen.getByTestId('owl-carousel')).toBeInTheDocument();
  });

  test('does not render OwlCarousel before component mounts', () => {
    // Mock componentDidMount to prevent state update
    jest.spyOn(FeedbackStyleTwo.prototype, 'componentDidMount').mockImplementation(() => {});
    
    render(<FeedbackStyleTwo />);
    expect(screen.queryByTestId('owl-carousel')).not.toBeInTheDocument();
  });
});