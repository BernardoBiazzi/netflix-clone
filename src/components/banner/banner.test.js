import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Banner from './banner';

describe('Banner component', () => {
    const banners = [
        {
            logo: 'logo1.png',
            background: 'bg1.png',
            title: 'Banner 1',
            description: 'Description 1',
        },
    ];

    it('renders without crashing', () => {
        render(<Banner banners={banners} />);
        expect(screen.getByTestId('banner')).toBeInTheDocument();
    });

    it('displays the correct banner content', () => {
        render(<Banner banners={banners} />);
        const banner = banners[0];

        expect(screen.getByAltText('Top 10')).toBeInTheDocument();
        expect(screen.getByText(banner.title)).toBeInTheDocument();
        expect(screen.getByText(banner.description)).toBeInTheDocument();
    });

    it.skip('handles banner rotation correctly', async () => {
        jest.useFakeTimers();
    
        render(<Banner banners={banners} />);
        const initialBanner = banners[0];
        const secondBanner = banners[1];
    
        // Skip the test if banners are not defined or do not have enough banners
        if (!banners || banners.length < 2) {
            return test.skip('Not enough banners for rotation test');
        }
    
        // Wait for the first interval to pass
        act(() => jest.advanceTimersByTime(10000));
    
        // Verify that the banner has changed after the first interval
        expect(screen.getByAltText('Top 10')).toBeInTheDocument();
        expect(screen.getByText(secondBanner.title)).toBeInTheDocument();
        expect(screen.getByText(secondBanner.description)).toBeInTheDocument();
    
        // Wait for the second interval to pass
        act(() => jest.advanceTimersByTime(10000));
    
        // Verify that the banner has changed again after the second interval
        expect(screen.getByAltText('Top 10')).toBeInTheDocument();
        expect(screen.getByText(initialBanner.title)).toBeInTheDocument();
        expect(screen.getByText(initialBanner.description)).toBeInTheDocument();
    });
    

    it('handles button clicks', () => {
        render(<Banner banners={banners} />);

        const watchMoreButton = screen.getByText('Assistir');
        const moreInfoButton = screen.getByText('Mais informações');

        userEvent.click(watchMoreButton);
        userEvent.click(moreInfoButton);
    });
});
