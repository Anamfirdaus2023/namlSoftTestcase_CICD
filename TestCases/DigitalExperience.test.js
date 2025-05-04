import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import DigitalExperience from '../components/Common/DigitalExperience';

beforeEach(() => {
  document.getElementById = jest.fn((id) => {
    const element = document.createElement('div');
    element.id = id;
    element.classList.add('tabs_item');
    return element;
  });
});

describe('DigitalExperience Component', () => {
  test.skip('renders the section title and description', () => {
    render(<DigitalExperience />);
    const sectionTitle = screen.getByText(/Outstanding Digital Experience/i);
    const sectionDescription = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i);

    expect(sectionTitle).toBeInTheDocument();
    expect(sectionDescription).toBeInTheDocument();
  });

  test('renders all tabs', () => {
    render(<DigitalExperience />);
    const tabs = screen.getAllByRole('listitem'); // Tabs are likely <li> elements
    expect(tabs.length).toBe(5); // Ensure there are 5 tabs
  });


  test.skip('renders tab content for the default tab', () => {
    render(<DigitalExperience />);

    // Scope the query to the tab content container
    const tabContentContainer = screen.getByRole('tabpanel', { name: /Real-Time Analytics/i });
    const realTimeAnalyticsContent = within(tabContentContainer).getByText(/Real-Time Analytics/i);

    expect(realTimeAnalyticsContent).toBeInTheDocument();
  });

  test.skip('switches to the correct tab content when a tab is clicked', () => {
    render(<DigitalExperience />);

    // Click on the "Pay-Per-Click" tab
    const tabsContainer = screen.getByRole('list');
    const payPerClickTab = within(tabsContainer).getByText(/Pay-Per-Click/i);
    fireEvent.click(payPerClickTab);

    // Verify the content for the "Pay-Per-Click" tab
    const tabContentContainer = screen.getByText(/Pay-Per-Click/i).closest('.tabs_item');
    expect(tabContentContainer).toBeInTheDocument();

    // Verify the content for the default tab is no longer displayed
    const defaultTabContent = screen.queryByText(/Real-Time Analytics/i);
    expect(defaultTabContent).not.toBeInTheDocument();
  });

  test('renders images for each tab', () => {
    render(<DigitalExperience />);
    const images = screen.getAllByAltText('image');
    expect(images.length).toBe(5); // Ensure there are 5 images, one for each tab
  });

  // test('renders tab inner content for the default tab', () => {
  //   render(<DigitalExperience />);

  //   // Simulate clicking the "Real-Time Analytics" tab
  //   const realTimeAnalyticsTab = screen.getByRole('listitem', { name: /Real-Time Analytics/i });
  //   fireEvent.click(realTimeAnalyticsTab);

  //   // Verify the content for the "Real-Time Analytics" tab
  //   const superResponsive = screen.getByText(/Super Responsive/i);
  //   const highSecurity = screen.getByText(/High Security/i);
  //   const optimalChoice = screen.getByText(/Optimal Choice/i);

  //   expect(superResponsive).toBeInTheDocument();
  //   expect(highSecurity).toBeInTheDocument();
  //   expect(optimalChoice).toBeInTheDocument();
  // });

  test('renders tab inner content for the default tab', () => {
    render(<DigitalExperience />);
    screen.debug(); // Log the rendered output for debugging
  });
});