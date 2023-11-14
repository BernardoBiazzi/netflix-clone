/* eslint-disable jsx-a11y/alt-text */
import './navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { FaSistrix, FaRegBell, FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const [topDistance, setTopDistance] = useState(0);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const handleScroll = () => {
        setTopDistance(window.scrollY);
    };

    const handleInnerWidth = () => {
        setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleInnerWidth);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleInnerWidth);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = (<>
        <NavLink to="inicio">Início</NavLink>
        <NavLink to="series">Séries</NavLink>
        <NavLink to="filmes">Filmes</NavLink>
        <NavLink to="bombando">Bombando</NavLink>
        <NavLink to="minha-lista">Minha lista</NavLink>
        <NavLink to="idiomas">Navegar por idiomas</NavLink>
    </>);

    const navigate = useNavigate();

    return (
        <nav className={`navbar ${topDistance > 10 ? 'fill-navbar' : ''}`}>
            <div className="left-side">
                <img className="logo" src={logo} alt="Logo"/>
                {innerWidth > 800 && navLinks}
            </div>
            <div className="right-side">
                <button onClick={() => navigate('search')} data-testid="search-button">
                    <FaSistrix/>
                </button>
                <button onClick={() => navigate('notificações')} data-testid="bell-button">
                    <FaRegBell/>
                </button>
                <button onClick={() => navigate('/')} data-testid="user-button">
                    <FaRegUser/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
