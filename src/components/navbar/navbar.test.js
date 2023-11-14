import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Navbar from './navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
    it('renders Navbar component', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        
        // Assert that the logo is rendered
        const logoElement = screen.getByAltText('Logo');
        expect(logoElement).toBeInTheDocument();

        // Assert that the navigation links are present
        const navLinks = ['Início', 'Séries', 'Filmes', 'Bombando', 'Minha lista', 'Navegar por idiomas'];
        navLinks.forEach(linkText => {
            const linkElement = screen.getByText(linkText);
            expect(linkElement).toBeInTheDocument();
        });

        // Assert that search, bell, and user buttons are rendered
        const searchButton = screen.getByTestId('search-button');
        const bellButton = screen.getByTestId('bell-button');
        const userButton = screen.getByTestId('user-button');

        expect(searchButton).toBeInTheDocument();
        expect(bellButton).toBeInTheDocument();
        expect(userButton).toBeInTheDocument();
    });

    it('changes navbar style on scroll', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        
        // Assert that the navbar initially does not have the 'fill-navbar' class
        const navbarElement = screen.getByRole('navigation');
        expect(navbarElement).not.toHaveClass('fill-navbar');

        // Simulate scrolling
        act(() => {
            window.scrollY = 20;
            window.dispatchEvent(new Event('scroll'));
        });

        // Assert that the navbar now has the 'fill-navbar' class after scrolling
        expect(navbarElement).toHaveClass('fill-navbar');
    });
});
