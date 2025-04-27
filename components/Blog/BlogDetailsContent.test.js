import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogDetailsContent from './BlogDetailsContent';
import BlogSidebar from './BlogSidebar';
import CommentsArea from './CommentsArea';

jest.mock('./BlogSidebar', () => () => <div data-testid="blog-sidebar">Blog Sidebar</div>);
jest.mock('./CommentsArea', () => () => <div data-testid="comments-area">Comments Area</div>);

describe('BlogDetailsContent Component', () => {
 

  test('renders the article image', () => {
    render(<BlogDetailsContent />);
    const image = screen.getByAltText('Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/blog/blog-details5.jpg');
  });

  test('renders the entry meta information', () => {
    render(<BlogDetailsContent />);
    const postedOn = screen.getByText(/Posted On:/i);
    const postedBy = screen.getByText(/Posted By:/i);
    expect(postedOn).toBeInTheDocument();
    expect(postedBy).toBeInTheDocument();
  });

  test('renders the article heading', () => {
    render(<BlogDetailsContent />);
    const heading = screen.getByRole('heading', { name: /Web development the best work in the future for the world/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the article content paragraphs', () => {
    render(<BlogDetailsContent />);
    const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  test('renders the blockquote', () => {
    render(<BlogDetailsContent />);
    const blockquote = screen.getByText(/Lorem, ipsum dolor sit amet consectetur adipisicing elit/i);
    expect(blockquote).toBeInTheDocument();
  });

  // test('renders the article footer with tags and share links', () => {
  //   render(<BlogDetailsContent />);
  //   const shareIcon = screen.getByText(/Share/i);
  //   expect(shareIcon).toBeInTheDocument();

  //   // Query links by href attributes
  //   const facebookLink = screen.getByRole('link', { name: /facebook/i });
  //   const twitterLink = screen.getByRole('link', { name: /twitter/i });
  //   const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  //   const pinterestLink = screen.getByRole('link', { name: /pinterest/i });

  //   expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/');
  //   expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com/');
  //   expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/');
  //   expect(pinterestLink).toHaveAttribute('href', 'https://www.pinterest.com/');
  // });

  test('renders social media links', () => {
    render(<BlogDetailsContent />);
    
    // Get all links
    const socialLinks = screen.getAllByRole('link');
    
    // Filter links by href attributes for social media
    const socialMediaLinks = socialLinks.filter(link =>
      /facebook\.com|twitter\.com|linkedin\.com|pinterest\.com/i.test(link.getAttribute('href'))
    );

    // Ensure at least one social media link is found
    expect(socialMediaLinks.length).toBeGreaterThan(0);

    // Verify each social media link
    const facebookLink = socialMediaLinks.find(link => link.getAttribute('href') === 'https://www.facebook.com/');
    const twitterLink = socialMediaLinks.find(link => link.getAttribute('href') === 'https://www.twitter.com/');
    const linkedinLink = socialMediaLinks.find(link => link.getAttribute('href') === 'https://www.linkedin.com/');
    const pinterestLink = socialMediaLinks.find(link => link.getAttribute('href') === 'https://www.pinterest.com/');

    expect(facebookLink).toBeTruthy();
    expect(twitterLink).toBeTruthy();
    expect(linkedinLink).toBeTruthy();
    expect(pinterestLink).toBeTruthy();
  });

  test('renders the post navigation links', () => {
    render(<BlogDetailsContent />);
    const prevPost = screen.getByText(/Prev Post/i);
    const nextPost = screen.getByText(/Next Post/i);

    expect(prevPost).toBeInTheDocument();
    expect(nextPost).toBeInTheDocument();
  });

  test('renders the CommentsArea component', () => {
    render(<BlogDetailsContent />);
    const commentsArea = screen.getByTestId('comments-area');
    expect(commentsArea).toBeInTheDocument();
  });

  test('renders the BlogSidebar component', () => {
    render(<BlogDetailsContent />);
    const blogSidebar = screen.getByTestId('blog-sidebar');
    expect(blogSidebar).toBeInTheDocument();
  });
});