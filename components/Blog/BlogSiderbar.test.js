import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogSidebar from './BlogSidebar';

describe('BlogSidebar Component', () => {
  test('renders the search form', () => {
    render(<BlogSidebar />);
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.getByRole('button');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('renders the Popular Posts section', () => {
    render(<BlogSidebar />);
    const popularPostsHeading = screen.getByText('Popular Posts');
    expect(popularPostsHeading).toBeInTheDocument();

    const popularPosts = screen.getAllByRole('article');
    expect(popularPosts.length).toBe(3); // Ensure there are 3 popular posts
  });

  test('renders the Categories section', () => {
    render(<BlogSidebar />);
    const categoriesHeading = screen.getByText('Categories');
    expect(categoriesHeading).toBeInTheDocument();

    // Scope the query to the categories section
    const categoriesWidget = screen.getByText('Categories').closest('.widget_categories');
    const categoryLinks = categoriesWidget.querySelectorAll('a'); // Get all links within the categories section
    expect(categoryLinks.length).toBe(5); // Ensure all 5 category links are rendered
  });

  test('renders the Tags section', () => {
    render(<BlogSidebar />);
    const tagsHeading = screen.getByText('Tags');
    expect(tagsHeading).toBeInTheDocument();

    // Scope the query to the tag cloud section
    const tagCloud = screen.getByText('Tags').closest('.widget_tag_cloud');
    const tags = tagCloud.querySelectorAll('a'); // Get all links within the tag cloud
    expect(tags.length).toBe(7); // Ensure there are 7 tags
  });

  test('renders all links in the Popular Posts section', () => {
    render(<BlogSidebar />);
    const popularPostLinks = screen.getAllByRole('link', { name: /Making Peace With The Feast Or Famine Of Freelancing|Be Healthy, Enjoy Life With Trifles Organic|Buy Organic Food Online And Be Healthy/i });
    expect(popularPostLinks.length).toBe(3); // Ensure all 3 popular post links are rendered
  });

  test('renders all category links', () => {
    render(<BlogSidebar />);
    const categoriesHeading = screen.getByText('Categories');
    expect(categoriesHeading).toBeInTheDocument();

    // Scope the query to the categories section
    const categoriesWidget = screen.getByText('Categories').closest('.widget_categories');
    const categoryLinks = categoriesWidget.querySelectorAll('a'); // Get all links within the categories section
    expect(categoryLinks.length).toBe(5); // Ensure all 5 category links are rendered
  });

  test('renders all tag links', () => {
    render(<BlogSidebar />);
    const tagsHeading = screen.getByText('Tags');
    expect(tagsHeading).toBeInTheDocument();

    // Scope the query to the tag cloud section
    const tagCloud = screen.getByText('Tags').closest('.widget_tag_cloud');
    const tagLinks = tagCloud.querySelectorAll('a'); // Get all links within the tag cloud
    expect(tagLinks.length).toBe(7); // Ensure all 7 tag links are rendered
  });
});