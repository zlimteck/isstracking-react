import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Card.css';
import axios from 'axios';
import nextArrow from '../../assets/nextArrow.svg';
import prevArrow from '../../assets/prevArrow.svg';

// Gère l'erreur samesite cookie
document.cookie = "SameSite=None; Secure";

function Card(){
    const [expeditions, setExpeditions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [numPages, setNumPages] = useState(0);


    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        axios.get('https://api.isstracking.xyz/v1/expeditions')
        .then((response) => {
            setExpeditions(response.data);
        })
        .catch((error) => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    const handlePageChange = (increment) => {
        setCurrentPage(currentPage + increment);
    }

    const filteredExpeditions = expeditions.filter((expedition) => {
        return expedition.number_expedition.toString().includes(searchTerm);
    });

    useEffect(() => {
        setNumPages(Math.ceil(filteredExpeditions.length / 10));
    }, [filteredExpeditions]); 

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    //Recupere le nombre de mission disponible 
    const numExpeditions = expeditions.length;

    return (
        <section className="gallery">
        {isLoading && <div className="loading">Chargement des données...</div>}
        {isError && <div className="error">Trop de requêtes. Veuillez réessayer plus tard.</div>}
        {!isLoading && !isError && filteredExpeditions.length === 0 && searchTerm !== '' && <div className="error">Aucune expéditions ne correspond au numéro de recherche. Il y a {numExpeditions} expéditions disponible.</div>}
        {!isLoading && !isError && filteredExpeditions.slice((currentPage - 1) * 10, currentPage * 10).map((expedition) => (
            <Link to={`/Expeditions/${expedition.number_expedition}`} key={expedition.number_expedition} className="card_link">
                <div className="card_container">
                    <img className="card_img" src={expedition.patch_expedition} alt="Expedition Patch"/>
                </div>
                <div className="card_title">
                    <strong>{expedition.name_expedition}</strong>
                </div>
            </Link>
        ))}
            <div className="card_option_container">
                <div className="card_page_count">
                    {currentPage > 1 && <img className="arrow" src={prevArrow} alt="Icone page precedente" onClick={() => handlePageChange(-1)} />}
                    <span className="page-number">Page {currentPage} / {numPages}</span>
                    {currentPage < numPages && <img className="arrow" src={nextArrow} alt="Icone page suivante" onClick={() => handlePageChange(1)} />}
                </div>
                <div className="card_number_search">
                    <input className="imput_search" type="number" placeholder="Recherche par numéro" onChange={(event) => setSearchTerm(event.target.value)} />
                </div>
            </div>
        </section>
    )
}

export default Card;