import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';

// Mock next/dynamic to load the mocked OwlCarousel
jest.mock('next/dynamic', () => () => {
  const MockOwlCarousel = require('react-owl-carousel3');
  return MockOwlCarousel;
});

// Mock react-owl-carousel3
jest.mock('react-owl-carousel3', () => {
  return ({ children, className, ...props }) => (
    <div className={className} data-testid="carousel">
      {children}
    </div>
  );
});

// Mock next/link (included for consistency, though not used)
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href} data-testid="mock-link">{children}</a>;
});

describe('PartnerStyleOne Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    await act(async () => {
      render(<PartnerStyleOne />);
    });
    const partnerSection = document.querySelector('.partner-section');
    expect(partnerSection).toBeInTheDocument();
    expect(partnerSection).toHaveClass('partner-section ptb-100');
  });

  test('renders OwlCarousel after component mounts', async () => {
    await act(async () => {
      render(<PartnerStyleOne />);
    });
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
    expect(carousel).toHaveClass('partner-slider owl-carousel owl-theme');
  });

  test('renders five partner items with images', async () => {
    await act(async () => {
      render(<PartnerStyleOne />);
    });
    const partnerItems = document.querySelectorAll('.partner-item');
    expect(partnerItems).toHaveLength(5);

    const images = screen.getAllByRole('img', { name: /partner/i });
    expect(images).toHaveLength(5);

    const expectedSources = [
      '/images/partners/partner1.png',
      '/images/partners/partner2.png',
      '/images/partners/partner3.png',
      '/images/partners/partner4.png',
      '/images/partners/partner5.png',
    ];

    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', expectedSources[index]);
      expect(img).toHaveAttribute('alt', 'partner');
    });
  });

  test('partner items have correct links', async () => {
    await act(async () => {
      render(<PartnerStyleOne />);
    });
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);

    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  test('does not render OwlCarousel before component mounts', () => {
    jest.spyOn(PartnerStyleOne.prototype, 'componentDidMount').mockImplementation(() => {});
    render(<PartnerStyleOne />);
    expect(screen.queryByTestId('carousel')).not.toBeInTheDocument();
  });
});