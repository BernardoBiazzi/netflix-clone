/* eslint-disable jsx-a11y/alt-text */
import './carousel.css';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ title, items }) => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const getItemWidth = () => {
        const firstItem = document.querySelector('.carousel-item');
        if (firstItem) {
            const itemRect = firstItem.getBoundingClientRect();
            return itemRect.width + 10;
        } else {
            return 0;
        }
    } 

    const handleLeft = () => {
        const newPosition = carouselRef.current.scrollLeft - (6 * getItemWidth());
        carouselRef.current.scrollLeft = newPosition;
        setTimeout(() => {
            setScrollPosition(carouselRef.current.scrollLeft)
        },600);
    };

    const handleRight = () => {
        const carousel = carouselRef.current;
        const newPosition = carousel.scrollLeft + (6 * getItemWidth());
        carousel.scrollLeft =  newPosition;
        setTimeout(() => {
            if (newPosition >= carousel.scrollWidth - carousel.clientWidth) {
                items.push(...items);
            }
            setScrollPosition(carousel.scrollLeft)
        },600);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        const newPosition = carousel.scrollLeft + (items.length * getItemWidth());
        carousel.scrollLeft =  newPosition;
        setTimeout(() => {
            if (newPosition >= carousel.scrollWidth - carousel.clientWidth) {
                items.push(...items);
            }
            setScrollPosition(carousel.scrollLeft)
        },600);
    }, []);

    return (
        <div className="carousel-container">
            <h3>{title}</h3>
            {scrollPosition > 0 && 
            <div className="left-button" onClick={handleLeft}><FaChevronLeft/></div>}
            <div className="right-button" onClick={handleRight}><FaChevronRight/></div>
            <div className="carousel" ref={carouselRef}>
                {items.map((item) => {
                    return (
                        <div key={item.id} className="carousel-item">
                            <img src={item.url}></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;