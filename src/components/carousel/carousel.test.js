import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertion messages
import Carousel from './carousel';

// Mocking the react-icons library
jest.mock('react-icons/fa', () => ({
    FaAngleRight: () => <div data-testid="fa-angle-right" />,
    FaChevronLeft: () => <div data-testid="fa-chevron-left" />,
    FaChevronRight: () => <div data-testid="fa-chevron-right" />,
}));

describe('Carousel component', () => {
    const mockItems = [
        { url: 'image1.jpg' },
        { url: 'image2.jpg' },
        { url: 'image3.jpg' },
    ];

    it('renders Carousel component correctly', () => {
        render(<Carousel title="Test Carousel" items={mockItems} />);
        expect(screen.getByText('Test Carousel')).toBeInTheDocument();
        expect(screen.getByTestId('fa-angle-right')).toBeInTheDocument();
    });

    it('handles navigation arrow click correctly', () => {
        render(<Carousel title="Test Carousel" items={mockItems} />);
        fireEvent.click(screen.getByTestId('fa-chevron-right'));
    });
});
