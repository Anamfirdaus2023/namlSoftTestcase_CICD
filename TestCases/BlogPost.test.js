import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPost from '../components/Common/BlogPost';

describe('BlogPost Component', () => {
 
  test('renders all blog posts', () => {
    render(<BlogPost />);
    const blogPosts = screen.getAllByRole('heading', { level: 3 });
    expect(blogPosts.length).toBe(3); // Ensure there are 3 blog posts
  });

  test('renders blog post titles and links', () => {
    render(<BlogPost />);
    const firstPostTitle = screen.getByText(/Great Tips To Earn More Money From Digital Industry/i);
    const secondPostTitle = screen.getByText(/The Billionaire Guide On Design That will Get You Rich/i);
    const thirdPostTitle = screen.getByText(/Making Peace With The Feast Or Famine Of Freelancing/i);

    expect(firstPostTitle).toBeInTheDocument();
    expect(secondPostTitle).toBeInTheDocument();
    expect(thirdPostTitle).toBeInTheDocument();

    const firstPostLink = screen.getByRole('link', { name: /Great Tips To Earn More Money From Digital Industry/i });
    const secondPostLink = screen.getByRole('link', { name: /The Billionaire Guide On Design That will Get You Rich/i });
    const thirdPostLink = screen.getByRole('link', { name: /Making Peace With The Feast Or Famine Of Freelancing/i });

    expect(firstPostLink).toHaveAttribute('href', '/blog-details');
    expect(secondPostLink).toHaveAttribute('href', '/blog-details');
    expect(thirdPostLink).toHaveAttribute('href', '/blog-details');
  });

  test('renders blog post dates', () => {
    render(<BlogPost />);
    const firstPostDate = screen.getByText(/20 April 2020/i);
    const secondPostDate = screen.getByText(/21 April 2020/i);
    const thirdPostDate = screen.getByText(/22 April 2020/i);

    expect(firstPostDate).toBeInTheDocument();
    expect(secondPostDate).toBeInTheDocument();
    expect(thirdPostDate).toBeInTheDocument();
  });

  test('renders "Read More" links for each blog post', () => {
    render(<BlogPost />);
    const readMoreLinks = screen.getAllByText(/Read More/i);
    expect(readMoreLinks.length).toBe(3); // Ensure there are 3 "Read More" links
    readMoreLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/blog-details');
    });
  });

  test('renders blog post images', () => {
    render(<BlogPost />);
    const images = screen.getAllByAltText('image');
    expect(images.length).toBe(3); // Ensure there are 3 images
    expect(images[0]).toHaveAttribute('src', '/images/blog/blog1.jpg');
    expect(images[1]).toHaveAttribute('src', '/images/blog/blog2.jpg');
    expect(images[2]).toHaveAttribute('src', '/images/blog/blog3.jpg');
  });
});