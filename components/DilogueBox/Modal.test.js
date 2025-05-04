import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Modal from './Modal';

// Mock axios
jest.mock('axios');

describe('Modal Component', () => {
  test('renders the modal and form fields', () => {
    render(<Modal />);

    // Check for modal title
    expect(screen.getByText(/Request A Demo\?/i)).toBeInTheDocument();

    // Check for form fields
    expect(screen.getByPlaceholderText(/Hospital Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone number/i)).toBeInTheDocument();

    // Check for submit button using class selector
    const submitButton = document.querySelector('.default-btn');
    expect(submitButton).toBeInTheDocument();
  });

  test('handles form submission successfully', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    render(<Modal />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Hospital Name/i), { target: { value: 'Test Hospital' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone number/i), { target: { value: '1234567890' } });

    // Submit the form using class selector
    const submitButton = document.querySelector('.default-btn');
    fireEvent.submit(submitButton.closest('form')); // Ensure the form is submitted

    // Wait for the axios call to resolve
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.stringContaining('/hopitalSendEmail'), {
        name: 'Test Hospital',
        email: 'test@example.com',
        number: '1234567890',
        subject: '',
        text: '',
      });
    });
  });

  test('handles form submission error', async () => {
    axios.post.mockRejectedValueOnce(new Error('Submission failed'));

    render(<Modal />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Hospital Name/i), { target: { value: 'Test Hospital' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone number/i), { target: { value: '1234567890' } });

    // Submit the form using class selector
    const submitButton = document.querySelector('.default-btn');
    fireEvent.submit(submitButton.closest('form')); // Ensure the form is submitted

    // Wait for the axios call to reject
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });
});