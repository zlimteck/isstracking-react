//Function to display Live youtube video of the ISS
import React from 'react';
import './Live.css';

function Live() {
    return (
        <section className="Live">
            <h2 className="title_live">Live de l'ISS:</h2>
            <section className="Live_container">
                <iframe className='FirstLive' src="https://www.youtube.com/embed/P9C25Un7xaM" title="YouTube video player live 1" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className='TwoLive' src="https://www.youtube.com/embed/jPTD2gnZFUw" title="YouTube video player live 2" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
        </section>
    );
}

export default Live;

