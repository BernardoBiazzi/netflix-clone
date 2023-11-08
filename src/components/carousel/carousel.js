/* eslint-disable jsx-a11y/alt-text */
import './carousel.css';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ title, items }) => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [enableRightArrow, setEnableRightArrow] = useState(true);

    const handleScrollPosition = () => {
        setScrollPosition(carouselRef.current.scrollLeft)
    }

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.addEventListener('scroll', handleScrollPosition);
        return () => {
            carousel.removeEventListener('scroll', handleScrollPosition);
        };
    }, [carouselRef]);

    const getItemWidth = () => {
        const firstItem = document.querySelector('.carousel-item');
        if (firstItem) {
            const itemRect = firstItem.getBoundingClientRect();
            return itemRect.width + 10;
        } else {
            return 0;
        }
    } 

    const leftClick = () => {
        const carousel = carouselRef.current;
        const newPosition = carousel.scrollLeft - (6 * getItemWidth());
        carousel.scrollLeft = newPosition;
        setEnableRightArrow(true);
    };

    const rightClick = () => {
        const carousel = carouselRef.current;
        const newPosition = carousel.scrollLeft + (6 * getItemWidth());
        carousel.scrollLeft = newPosition;
        const scrollLimit = carousel.scrollWidth - carousel.clientWidth;
        if (newPosition >= scrollLimit) {
            setEnableRightArrow(false);
        } else {
            setEnableRightArrow(true);
        }
    };

    return (
        <div className="carousel-container">
            <h3>{title}</h3>
            {scrollPosition > 0 && 
            <div className="left-button" onClick={leftClick}><FaChevronLeft/></div>}
            {enableRightArrow && 
            <div className="right-button" onClick={rightClick}><FaChevronRight/></div>}
            <div className="carousel" ref={carouselRef}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            <img src={item.url}></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;