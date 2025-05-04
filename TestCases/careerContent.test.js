import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobCard from '../components/Career/JobCard';
import CareerContent from '../components/Career/CareerContent';
jest.mock('../components/Career/JobCard', () => jest.fn(() => <div data-testid="job-card">JobCard</div>));
jest.mock('react-visibility-sensor', () => ({ children }) => children({ isVisible: true }));
jest.mock('react-owl-carousel3', () => ({ children }) => <div data-testid="owl-carousel">{children}</div>);

describe.skip('CareerContent Component', () => {
  const mockData = [
    {
      bgClass: 'url(/images/bg.jpg)',
      visionTitle: 'Our Vision',
      description: 'This is our vision description.',
      btnText: 'Learn More',
      btnLink: '#Section',
    },
  ];

  const mockJobDetails = {
    jobType: 'Full-Time',
    description: 'We are hiring talented individuals.',
  };

  const mockJobDetailsList = [
    {
      jobTitle: 'Software Engineer',
      jobLocation: 'New York',
      jobId: '1',
      jobType: 'Full-Time',
      skills: ['JavaScript', 'React'],
      issueDate: '2025-04-01',
      rolesResponsibilities: 'Develop and maintain web applications.',
    },
    {
      jobTitle: 'Product Manager',
      jobLocation: 'San Francisco',
      jobId: '2',
      jobType: 'Full-Time',
      skills: ['Leadership', 'Agile'],
      issueDate: '2025-04-02',
      rolesResponsibilities: 'Manage product lifecycle.',
    },
  ];

  test('renders the carousel with data', () => {
    render(<CareerContent data={mockData} jobDetails={mockJobDetails} jobDetailsList={mockJobDetailsList} />);
    screen.debug(); // Debug the rendered output
    const carousel = screen.getByTestId('owl-carousel');
    expect(carousel).toBeInTheDocument();
    const visionTitle = screen.getByText(/Our Vision/i);
    expect(visionTitle).toBeInTheDocument();
    const description = screen.getByText(/This is our vision description./i);
    expect(description).toBeInTheDocument();
    const button = screen.getByText(/Learn More/i);
    expect(button).toBeInTheDocument();
  });

  test('renders job details section', () => {
    render(<CareerContent data={mockData} jobDetails={mockJobDetails} jobDetailsList={mockJobDetailsList} />);
    const jobType = screen.getByText(/Full-Time/i);
    expect(jobType).toBeInTheDocument();
    const jobDescription = screen.getByText(/We are hiring talented individuals./i);
    expect(jobDescription).toBeInTheDocument();
  });

  test('renders job cards', () => {
    render(<CareerContent data={mockData} jobDetails={mockJobDetails} jobDetailsList={mockJobDetailsList} />);
    const jobCards = screen.getAllByTestId('job-card');
    expect(jobCards.length).toBe(2); // Ensure 2 job cards are rendered
  });

  test('renders "No job openings" message when jobDetailsList is empty', () => {
    render(<CareerContent data={mockData} jobDetails={mockJobDetails} jobDetailsList={[]} />);
    const noJobsMessage = screen.getByText(/No job openings available at the moment./i);
    expect(noJobsMessage).toBeInTheDocument();
  });

  test('renders "See More" button and loads more jobs on click', () => {
    render(<CareerContent data={mockData} jobDetails={mockJobDetails} jobDetailsList={[...mockJobDetailsList, ...mockJobDetailsList]} />);
    const seeMoreButton = screen.getByText(/See More/i);
    expect(seeMoreButton).toBeInTheDocument();

    fireEvent.click(seeMoreButton);
    const jobCards = screen.getAllByTestId('job-card');
    expect(jobCards.length).toBeGreaterThan(2); // Ensure more job cards are rendered after clicking "See More"
  });
});