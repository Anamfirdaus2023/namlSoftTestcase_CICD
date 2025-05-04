import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import ContactForm from '../components/Contact/ContactForm';

// Mock axios
jest.mock('axios');

// Mock i18next translation function
jest.mock('i18next', () => ({
  t: (key) => key,
}));

// Mock the environment variable
process.env.REACT_APP_BASE_URL = 'http://localhost:8000';

describe('ContactForm Component', () => {
  test('renders the form fields', () => {
    render(<ContactForm />);

    // Check for form fields using placeholders
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Write your message.../i)).toBeInTheDocument();

    // Check for the submit button
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<ContactForm />);

    // Simulate input changes using placeholders
    const nameInput = screen.getByPlaceholderText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');

    const phoneInput = screen.getByPlaceholderText(/Phone number/i);
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    expect(phoneInput.value).toBe('1234567890');

    const subjectInput = screen.getByPlaceholderText(/Subject/i);
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    expect(subjectInput.value).toBe('Test Subject');

    const messageInput = screen.getByPlaceholderText(/Write your message.../i);
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    expect(messageInput.value).toBe('This is a test message.');
  });

  test('submits the form successfully', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    render(<ContactForm />);

    // Fill out the form using placeholders
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText(/Write your message.../i), { target: { value: 'This is a test message.' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for the axios call to resolve
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/sendEmail', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      number: '1234567890',
      subject: 'Test Subject',
      text: 'This is a test message.',
    });
  });

  test('handles form submission error', async () => {
    axios.post.mockRejectedValueOnce(new Error('Submission failed'));

    render(<ContactForm />);

    // Fill out the form using placeholders
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText(/Write your message.../i), { target: { value: 'This is a test message.' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for the axios call to reject
    expect(axios.post).toHaveBeenCalled();
    // You can also check for console.error or other error handling logic here
  });
});