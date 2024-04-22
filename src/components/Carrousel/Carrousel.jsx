import "./Carrousel.css";
import { useState } from "react";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

const images = [
    {
        id: 1,
        filename: "img/img1.webp",
    },
    {
        id: 2,
        filename: "img/img2.webp",
    },
    {
        id: 3,
        filename: "img/img3.webp",
    },
    {
        id: 4,
        filename: "img/img4.webp",
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
        <section className="carrousel">
            <div className="images_container">
                <img className="Carrousel_image" src={process.env.PUBLIC_URL + '/' + images[currentImage].filename} alt="Illustration de l'ISS dans le carrousel"  />
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
        </section>
    );
}

export default Carrousel;