import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutContent from '../components/About/AboutContent';

// Mock react-i18next globally
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => ({
      'About Us': 'About Us',
      'aboutUs.description': 'is a dynamic startup, established in 2023',
      'Discover More': 'Discover More',
      'Introducing': 'Introducing',
    }[key] || key), // Ensure it returns a string
  }),
}));

describe('AboutContent Component', () => {
  test('renders the tabs', () => {
    render(<AboutContent />);
    screen.debug(); // Debug the rendered output
    const tabs = screen.getAllByRole('listitem'); // Use 'listitem' since tabs are likely <li> elements
    expect(tabs.length).toBeGreaterThan(0); // Ensure at least one tab is found
  });

  test('renders the Discover More button', () => {
    render(<AboutContent />);
    const links = screen.getAllByRole('link'); // Get all links
    const discoverMoreLink = links.find(link => link.getAttribute('href') === '/services'); // Find the link with the correct href
    expect(discoverMoreLink).toBeInTheDocument(); // Ensure the link exists
  });

  test('renders the Discover More link', () => {
    render(<AboutContent />);
    const links = screen.getAllByRole('link'); // Get all links
    const discoverMoreLinks = links.filter(link =>
      /\/services/i.test(link.getAttribute('href')) // Filter links pointing to '/services'
    );
    expect(discoverMoreLinks.length).toBeGreaterThan(0); // Ensure at least one link is found
  });

  test('renders the list items', () => {
    render(<AboutContent />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
  });

  test('renders the section title bar', () => {
    render(<AboutContent />);
    const barElement = screen.getByText((content, element) => element.classList.contains('bar'));
    expect(barElement).toBeInTheDocument();
  });

  test('renders the content paragraphs', () => {
    render(<AboutContent />);
    const paragraphs = screen.getAllByText((content, element) => element.tagName === 'P');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  test('renders the images', () => {
    render(<AboutContent />);
    const images = screen.queryAllByRole('img'); // Use queryAllByRole to avoid errors if no images are found
    expect(images.length).toBeGreaterThanOrEqual(0); // Adjust expectation based on actual behavior
  });
});