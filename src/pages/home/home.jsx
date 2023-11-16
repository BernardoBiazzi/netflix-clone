import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle('Início');
    const [loading, setLoading] = useState(true);
    const [banners, setBanners] = useState(null);
    const [carousels, setCarousels] = useState(null);

    useEffect(() => {
        const loadBanners = async() => {
            const res =  await fetch(`http://localhost:5000/banners?page=home`)
                .then((res) => res.json())
                .then((data) => data[0].data)
                .catch((err) => console.log(err));
            setBanners(res);
        }
        const loadCarousels = async() => {
            const res =  await fetch(`http://localhost:5000/carousels?page=home`)
                .then((res) => res.json())
                .then((data) => data[0].data)
                .catch((err) => console.log(err));
            setCarousels(res);
            setLoading(false);
        }
        loadBanners();
        loadCarousels();
    }, []);

    return (<>
        {loading === false && (<>
            <Banner banners={banners}/>
            {carousels?.map((carousel) => (
                <Carousel 
                    key={carousel.id} 
                    title={carousel.title} 
                    items={carousel.items}>
                </Carousel>
            ))}
        </>)}
    </>);
}

export default Home;