import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentsArea from '../components/Blog/CommentsArea';

describe('CommentsArea Component', () => {
  test('renders the comments title', () => {
    render(<CommentsArea />);
    const commentsTitle = screen.getByText('2 Comments:');
    expect(commentsTitle).toBeInTheDocument();
  });

//   test('renders all comments', () => {
//     render(<CommentsArea />);
//     const comments = screen.getAllByRole('listitem', { name: /comment/i });
//     expect(comments.length).toBe(3); // Ensure there are 3 comments
//   });

  test('renders the first comment author', () => {
    render(<CommentsArea />);
    const firstCommentAuthor = screen.getByText('John Jones');
    expect(firstCommentAuthor).toBeInTheDocument();
  });

  test('renders the nested comment', () => {
    render(<CommentsArea />);
    const nestedCommentAuthor = screen.getByText('Steven Smith');
    expect(nestedCommentAuthor).toBeInTheDocument();
  });

  test('renders the reply links', () => {
    render(<CommentsArea />);
    const replyLinks = screen.getAllByRole('link', { name: /Reply/i });
    expect(replyLinks.length).toBe(3); // Ensure there are 3 reply links
  });

//   test('renders the comment form', () => {
//     render(<CommentsArea />);
//     const formTitle = screen.getByText('Leave a Reply');
//     expect(formTitle).toBeInTheDocument();

//     // Query inputs and textarea directly
//     const nameInput = screen.getByRole('textbox', { name: /Name/i });
//     const emailInput = screen.getByRole('textbox', { name: /Email/i });
//     const websiteInput = screen.getByRole('textbox', { name: /Website/i });
//     const commentTextarea = screen.getByRole('textbox', { name: /Comment/i });
//     const submitButton = screen.getByRole('button', { name: /Post A Comment/i });

//     expect(nameInput).toBeInTheDocument();
//     expect(emailInput).toBeInTheDocument();
//     expect(websiteInput).toBeInTheDocument();
//     expect(commentTextarea).toBeInTheDocument();
//     expect(submitButton).toBeInTheDocument();
//   });

  test('renders the required fields note', () => {
    render(<CommentsArea />);
    const requiredNote = screen.getByText(/Your email address will not be published./i);
    expect(requiredNote).toBeInTheDocument();
  });
});