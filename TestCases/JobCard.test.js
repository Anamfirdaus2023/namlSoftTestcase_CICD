import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobCard from '../components/Career/JobCard';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('JobCard Component', () => {
  const mockProps = {
    jobTitle: 'Software Engineer',
    jobLocation: 'New York',
    jobId: '12345',
    rolesResponsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Write clean and efficient code',
      'Participate in code reviews',
      'Troubleshoot and debug issues',
      'Ensure application scalability',
      'Stay updated with industry trends',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Redux', 'TypeScript'],
    index: 0,
  };

  test('renders job title and location', () => {
    render(<JobCard {...mockProps} />);
    const jobTitle = screen.getByText('Software Engineer');
    const jobLocation = screen.getByText('New York');
    expect(jobTitle).toBeInTheDocument();
    expect(jobLocation).toBeInTheDocument();
  });

  test('renders job ID', () => {
    render(<JobCard {...mockProps} />);
    const jobId = screen.getByText('12345');
    expect(jobId).toBeInTheDocument();
  });

//   test('renders skills and toggles "Show More/Less" for skills', () => {
//     render(<JobCard {...mockProps} />);
//     const initialSkills = screen.getAllByText(/JavaScript|React|Node\.js|CSS|HTML|Redux/i);
//     expect(initialSkills.length).toBe(6); // Initially shows 6 skills

//     const showMoreButton = screen.getByRole('button', { name: /\+/i });
//     fireEvent.click(showMoreButton);

//     const allSkills = screen.getAllByText(/JavaScript|React|Node\.js|CSS|HTML|Redux|TypeScript/i);
//     expect(allSkills.length).toBe(7); // Shows all skills after clicking "Show More"

//     const showLessButton = screen.getByRole('button', { name: /-/i });
//     fireEvent.click(showLessButton);

//     const reducedSkills = screen.getAllByText(/JavaScript|React|Node\.js|CSS|HTML|Redux/i);
//     expect(reducedSkills.length).toBe(6); // Returns to 6 skills after clicking "Show Less"
//   });

//   test('renders roles and responsibilities and toggles "Show More/Less"', () => {
//     render(<JobCard {...mockProps} />);
//     const initialRoles = screen.getAllByText(/Develop and maintain web applications|Collaborate with cross-functional teams|Write clean and efficient code|Participate in code reviews|Troubleshoot and debug issues|Ensure application scalability/i);
//     expect(initialRoles.length).toBe(6); // Initially shows 6 roles

//     // const showMoreButton = screen.getByText(/Show More/i);
//     // fireEvent.click(showMoreButton);

//     // const allRoles = screen.getAllByText(/Stay updated with industry trends/i);
//     // expect(allRoles.length).toBe(1); // Shows additional roles after clicking "Show More"

//     const showLessButton = screen.getByText(/Show Less/i);
//     fireEvent.click(showLessButton);

//     const reducedRoles = screen.getAllByText(/Develop and maintain web applications|Collaborate with cross-functional teams|Write clean and efficient code|Participate in code reviews|Troubleshoot and debug issues|Ensure application scalability/i);
//     expect(reducedRoles.length).toBe(6); // Returns to 6 roles after clicking "Show Less"
//   });

  test('handles "Apply Now" click and shows SweetAlert', () => {
    render(<JobCard {...mockProps} />);
    const applyNowButton = screen.getByText('Apply Now');
    fireEvent.click(applyNowButton);

    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Congratulations!',
      text: 'Please share your resume at contactus@namlsoft.com',
      icon: 'success',
      customClass: {
        confirmButton: 'swal-button-color',
      },
    });
  });
});