/* eslint-disable jsx-a11y/alt-text */
import './banner.scss'
import top10 from '../../assets/img/top10.png'
import { useEffect, useState } from 'react';
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const banners = [
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1280px-Cyberpunk_2077_logo.svg.png',
        background: 'https://wallpapercosmos.com/w/full/c/4/f/2615-3840x2160-desktop-4k-cyberpunk-2077-wallpaper-image.jpg',
        title: 'Top 7 em séries hoje',
        description: 'Uma série de ficção científica que explora um mundo cyberpunk cheio de tecnologia avançada, crime cibernético e personagens complexos.',
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Battlefield_2042_logo.svg/2560px-Battlefield_2042_logo.svg.png',
        background: 'https://images7.alphacoders.com/130/1304600.jpeg',
        title: 'Top 3 em séries hoje',
        description: 'Uma série de ação baseada em "Battlefield 2042", explorando conflitos globais e operações secretas em um mundo à beira do caos.',
    },
    {
        logo: 'https://www.themoviedb.org/t/p/original/2McArFsvD3oiNRejBKrXE0hf1PQ.png',
        background: 'https://static.hbo.com/2022-06/house-of-the-dragon-ka-1920.jpg',
        title: 'Top 2 em séries hoje',
        description: '"House of the Dragon" é uma série de televisão derivada de "Game of Thrones" que se passa 200 anos antes dos eventos da série original.',
    },
];

const Banner = () => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                let newIndex = prev + 1;
                if (!banners[newIndex]) {
                    newIndex = 0;
                }
                return newIndex;
            });
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="banner">
            <div className="fade"></div>
            <div className="vinheta"></div>
            <img className="banner-logo" src={banners[index].logo} />
            <img className="banner-background" src={banners[index].background} />
            <div className="description">
                <div className="title">
                    <img className="top-10" src={top10}/>
                    <p>{banners[index].title}</p>
                </div>
                <p className="text-description">
                    {banners[index].description}
                </p>
                <div className="action-buttons">
                    <button className="watch-more"><FaPlay/>Assistir</button>
                    <button className="more-info"><FaInfoCircle/>Mais informações</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;