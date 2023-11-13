/* eslint-disable jsx-a11y/alt-text */
import './banner.scss';
import { useEffect, useState } from 'react';
import top10 from '../../assets/img/top10.png';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const Banner = ({ banners }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [banners]);

    if (!banners || banners.length === 0) return <></>;
    const banner = banners[index];

    return (
        <div className="banner">
        <div className="fade"></div>
        <div className="vinheta"></div>
        <img className="banner-logo" src={banner.logo} />
        <img className="banner-background" src={banner.background} />
        <div className="description">
            {banner.title && (
                <div className="title">
                    <img className="top-10" src={top10} alt="Top 10" />
                    <p>{banner.title}</p>
                </div>
            )}
            <p className="text-description">{banner.description}</p>
            <div className="action-buttons">
                <button className="watch-more">
                    <FaPlay /> Assistir
                </button>
                <button className="more-info">
                    <FaInfoCircle /> Mais informações
                </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;