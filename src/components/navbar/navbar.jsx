/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './navbar.scss';
import { useEffect } from 'react';
import { FaSistrix, FaRegBell, FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

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

    return (
        <nav className={`navbar${topDistance > 10 ? ' fill-navbar' : ''}`}>
            <div className="left-side">
                <img className="logo" src={logo}/>
                {innerWidth > 800 && (<>
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="series">Séries</NavLink>
                    <NavLink to="filmes">Filmes</NavLink>
                    <NavLink to="bombando">Bombando</NavLink>
                    <NavLink to="minha-lista">Minha lista</NavLink>
                    <NavLink to="idiomas">Navegar por idiomas</NavLink>
                </>)}
            </div>
            <div className="right-side">
                <button><FaSistrix/></button>
                <button><FaRegBell/></button>
                <button><FaRegUser/></button>
            </div>
        </nav>
    );
};

export default Navbar;
