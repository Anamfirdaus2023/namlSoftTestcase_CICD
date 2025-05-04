import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageBanner from '../components/Common/PageBanner';

// Mock next/link to avoid nested <a> tags
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href} data-testid="mock-link">{children}</a>;
});

describe('PageBanner Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing with required props', () => {
    render(<PageBanner pageTitle="Test Page" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Page');
    const pageTitleArea = document.querySelector('.page-title-area');
    expect(pageTitleArea).toBeInTheDocument();
    expect(pageTitleArea).toHaveClass('page-title-area pt-50');
  });

  test('renders page title and applies bgImage class', () => {
    render(
      <PageBanner
        pageTitle="About Us"
        bgImage="bg-image-test"
      />
    );
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('About Us');
    const pageTitleArea = document.querySelector('.page-title-area');
    expect(pageTitleArea).toHaveClass('page-title-area pt-50 bg-image-test');
  });

  test('renders breadcrumb with home page link and active page text', () => {
    render(
      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />
    );
    const homeLink = screen.getByTestId('mock-link');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink).toHaveTextContent('Home');

    // Target the active page text in the breadcrumb list specifically
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems[1]).toHaveTextContent('Services');
  });

  test('handles missing optional props gracefully', () => {
    render(<PageBanner pageTitle="Contact" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Contact');
    const pageTitleArea = document.querySelector('.page-title-area');
    expect(pageTitleArea).toHaveClass('page-title-area pt-50');
    // Breadcrumb list is present but hidden
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('breadcrumb list is hidden with d-none class', () => {
    render(
      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />
    );
    const breadcrumbList = screen.getByRole('list');
    expect(breadcrumbList).toHaveClass('d-none');
  });
});