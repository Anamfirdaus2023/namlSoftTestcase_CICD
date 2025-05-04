import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TeamStyleOne from '../components/Common/TeamStyleOne';

describe('TeamStyleOne Component', () => {
  test('renders the heading', () => {
    render(<TeamStyleOne />);
    const headingElement = screen.getByText(/Our Expert Team/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the team members', () => {
    render(<TeamStyleOne />);
    const teamMembers = screen.getAllByRole('heading', { level: 3 });
    expect(teamMembers.length).toBeGreaterThan(0);
  });

  test('renders social media links for each team member', () => {
    render(<TeamStyleOne />);
    const socialLinks = screen.getAllByRole('link');
    const socialMediaLinks = socialLinks.filter(link =>
      /linkedin\.com|facebook\.com|twitter\.com/i.test(link.getAttribute('href'))
    );
    expect(socialMediaLinks.length).toBeGreaterThan(0);
  });

  test('renders team member images', () => {
    render(<TeamStyleOne />);
    const images = screen.getAllByRole('img', { name: /image/i });
    expect(images.length).toBeGreaterThan(0);
  });

  test('renders the section title bar', () => {
    render(<TeamStyleOne />);
    const barElement = screen.getByText((content, element) => element.classList.contains('bar'));
    expect(barElement).toBeInTheDocument();
  });
});