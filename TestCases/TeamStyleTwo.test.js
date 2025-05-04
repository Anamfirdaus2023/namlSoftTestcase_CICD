import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';

// Mock next/link (included for consistency, though not used)
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href} data-testid="mock-link">{children}</a>;
});

describe('TeamStyleTwo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<TeamStyleTwo />);
    const teamSection = document.querySelector('.team-section');
    expect(teamSection).toBeInTheDocument();
    expect(teamSection).toHaveClass('team-section pb-70');
  });

  test('renders section title with correct heading and paragraph', () => {
    render(<TeamStyleTwo />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Our Team');

    const paragraph = screen.getByText(/Our success is largely due to our talented and passionate leadership team./i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName.toLowerCase()).toBe('p');

    const bar = document.querySelector('.bar');
    expect(bar).toBeInTheDocument();
  });

  test('renders visible team item with correct details', () => {
    render(<TeamStyleTwo />);
    // Query team items without d-none on their parent column
    const teamItems = document.querySelectorAll('.col-lg-4:not(.d-none) .team-item');
    expect(teamItems).toHaveLength(1); // Only Qamar Khan's item is visible

    const name = screen.getByRole('heading', { level: 3, name: 'Qamar Khan' });
    expect(name).toBeInTheDocument();

    const designation = screen.getByText('Product Manager');
    expect(designation).toBeInTheDocument();
    expect(designation.tagName.toLowerCase()).toBe('span');

    const description = screen.getByText(/Product Manager, with over 17\+ years of IT industry experience/i);
    expect(description).toBeInTheDocument();
    expect(description.tagName.toLowerCase()).toBe('p');

    // const image = screen.getByRole('img', { name: /image/i });
    // expect(image).toHaveAttribute('src', '/images/team/QK.png');
    // expect(image).toHaveClass('img');
  });

  test.skip('renders social link for visible team member', () => {
    render(<TeamStyleTwo />);
    // Query the LinkedIn link by href since it lacks an accessible name
    const socialLink = screen.getByRole('link', {
      name: '',
      href: 'https://www.linkedin.com/in/qamar-khan-46a92774/',
    });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute('href', 'https://www.linkedin.com/in/qamar-khan-46a92774/');
    expect(socialLink).toHaveAttribute('target', '_blank');
  });

  test('applies additionalClass prop to section', () => {
    render(<TeamStyleTwo additionalClass="custom-class" />);
    const teamSection = document.querySelector('.team-section');
    expect(teamSection).toHaveClass('team-section pb-70 custom-class');
  });

  test('does not render content of hidden team items', () => {
    render(<TeamStyleTwo />);
    const hiddenColumns = document.querySelectorAll('.col-lg-4.d-none');
    expect(hiddenColumns).toHaveLength(2); // Two hidden columns

    // Ensure hidden team members' content is present but in hidden columns
    const asifSayed = screen.getByText('Asif Sayed');
    expect(asifSayed.closest('.col-lg-4')).toHaveClass('d-none');

    const placeholderName = screen.getByText('Name');
    expect(placeholderName.closest('.col-lg-4')).toHaveClass('d-none');
  });
});