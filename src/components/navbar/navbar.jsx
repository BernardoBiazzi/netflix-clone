/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './navbar.scss';
import { useEffect } from 'react';
import { FaSistrix, FaRegBell, FaRegUser, FaBars } from "react-icons/fa";

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
        <div className={`navbar ${topDistance > 10 && 'fill-navbar'}`}>
            <div className="left-side">
                <img className="logo" src={logo}/>
                {
                    innerWidth > 800 ? (<>
                        <a href="#inicio" className="active">Início</a>
                        <a href="#series">Séries</a>
                        <a href="#filmes">Filmes</a>
                        <a href="#bombando">Bombando</a>
                        <a href="#minha-lista">Minha lista</a>
                        <a href="#idiomas">Navegar por idiomas</a>
                    </>) : (<>
                        <span><FaBars/></span>
                    </>)
                }
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
