import './carousel.scss';
import { useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ title, items }) => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [enableRightArrow, setEnableRightArrow] = useState(true);

    const handleScrollPosition = () => {
        setScrollPosition(carouselRef.current.scrollLeft);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.addEventListener('scroll', handleScrollPosition);
        return () => {
            carousel.removeEventListener('scroll', handleScrollPosition);
        };
    }, []);

    const getItemWidth = () => {
        const firstItem = carouselRef.current.querySelector('.carousel-item');
        return firstItem ? firstItem.getBoundingClientRect().width + 10 : 0;
    };

    const calculateNewPosition = (direction) => {
        const currentPosition = carouselRef.current.scrollLeft;
        const movement = direction === 'left' ? -6 : 6;
        return currentPosition + movement * getItemWidth();
    };

    const handleArrowClick = (direction) => {
        const newPosition = calculateNewPosition(direction);
        const carousel = carouselRef.current;
        carousel.scrollLeft = newPosition;
        const scrollLimit = carousel.scrollWidth - carousel.clientWidth;
        setEnableRightArrow(newPosition < scrollLimit);
    };

    return (
        <div className="carousel-container">
            <h3>
                {title}
                <span>Ver tudo</span>
                <FaAngleRight />
            </h3>
            {scrollPosition > 0 && (
                <div className="left-button" onClick={() => handleArrowClick('left')}>
                    <FaChevronLeft />
                </div>
            )}
            {enableRightArrow && (
                <div className="right-button" onClick={() => handleArrowClick('right')}>
                    <FaChevronRight />
                </div>
            )}
            <div className="carousel" ref={carouselRef}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.url} alt={`carousel-item-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
