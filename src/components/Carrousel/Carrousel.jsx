import "./Carrousel.css";
import { useState } from "react";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

const images = [
    {
        id: 1,
        url: "https://live.staticflickr.com/65535/51891344064_ed3b0fa8c4_5k.jpg",
    },
    {
        id: 2,
        url: "https://live.staticflickr.com/65535/51663955083_2c4a9d14e7_5k.jpg",
    },
    {
        id: 3,
        url: "https://live.staticflickr.com/65535/51326220656_75a6d9406e_5k.jpg",
    },
    {
        id: 4,
        url: "https://live.staticflickr.com/65535/51891344339_141db6b22a_5k.jpg",
    },
];

function Carrousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };
    const prevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };
    return (
        <div className="carrousel">
            <div className="images_container">
                <img className="Carrousel_image" src={images[currentImage].url} alt="Illustration de l'ISS dans le carrousel"  />
                <div className="carrousel_counter">
                    {currentImage + 1} / {images.length}
                    <p className="credit">@ThomasPesquet</p>
                </div>
            </div>
            <div className="buttons_container">
                {images.length > 1 && (
                    <>
                    <img className="carrousel_prev" src={prevArrow} onClick={prevImage} alt="Fleche precedente"/>
                    <img className="carrousel_next" src={nextArrow} onClick={nextImage} alt="Fleche suivante"/>
                    </>
                )}
            </div>
        </div>
    );
}

export default Carrousel;