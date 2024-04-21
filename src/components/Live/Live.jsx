//Function to display Live youtube video of the ISS
import React, { useState } from 'react';
import './Live.css';

function Live() {
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Modifier le seuil pour déclencher l'intersection
        });

        observer.observe(document.querySelector('.Live'));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="Live">
            <h2 className="title_live">Live de l'ISS:</h2>
            {!isVisible && (
                <div className="video-facade">
                    <button onClick={() => setIsVisible(true)}>Lancer la vidéo</button>
                    <img src="placeholder_image.jpg" alt="Placeholder" />
                </div>
            )}
            {isVisible && (
                <section className="Live_container">
                    <iframe className='FirstLive' src="https://www.youtube.com/embed/P9C25Un7xaM" title="YouTube video player live 1" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe className='TwoLive' src="https://www.youtube.com/embed/jPTD2gnZFUw" title="YouTube video player live 2" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </section>
            )}
        </section>
    );
}

export default Live;