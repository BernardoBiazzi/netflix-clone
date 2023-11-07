/* eslint-disable jsx-a11y/alt-text */
import './carousel.css';

const Carousel = ({ title, items }) => {
    return (
        <div className="carousel-container">
            <h3>{title}</h3>
            <div className="left-button"></div>
            <div className="right-button"></div>
            <div className="carousel">
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