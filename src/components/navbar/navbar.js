/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './navbar.css';
import { useEffect } from 'react';
import { FaSistrix, FaRegBell, FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const [topDistance, setTopDistance] = useState(0);

    const handleScroll = () => {
        setTopDistance(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={topDistance > 100 ? 'navbar fill-navbar' : 'navbar'}>
            <div className="left-side">
                <img className="logo" src={logo}/>
                <a href="#inicio" className="active">Início</a>
                <a href="#series">Séries</a>
                <a href="#filmes">Filmes</a>
                <a href="#bombando">Bombando</a>
                <a href="#minha-lista">Minha lista</a>
                <a href="#idiomas">Navegar por idiomas</a>
            </div>
            <div className="right-side">
                <span><FaSistrix/></span>
                <span><FaRegBell/></span>
                <button><FaRegUser/></button>
            </div>
        </div>
    );
};

export default Navbar;
