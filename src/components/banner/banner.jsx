/* eslint-disable jsx-a11y/alt-text */
import './banner.scss'
import top10 from '../../assets/img/top10.png'
import { useEffect, useState } from 'react';
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const Banner = ({ banners }) => {
    const [index, setIndex] = useState(0);

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
    }, [banners]);

    if (!banners) return (<></>);
    
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