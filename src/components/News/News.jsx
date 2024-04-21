import React, { useEffect, useState } from 'react';
import './News.css';
import axios from 'axios';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v4/reports?limit=6')
            .then((response) => {
                console.log('Response from API:', response.data);
                // Vérifier si la réponse contient des données
                if (Array.isArray(response.data.results)) {
                    // Mettre à jour news avec les données des résultats
                    setNews(response.data.results);
                } else {
                    console.error('Results array not found in API response:', response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <section className="News">
            <h2 className="News_title">Rapports Journalier:</h2>
            <div className="News_container">
                {/* Vérifier si news est un tableau avant d'appeler map */}
                {Array.isArray(news) && news.map((article) => (
                    <div key={article.id} className="News_article">
                        <img src={article.image_url} alt={article.title} className="News_image" />
                        <h3 className="News_article_title">{article.title}</h3>
                        <p className="News_article_summary">{article.summary}</p>
                        <a href={article.url} target="_blank" rel="noreferrer" className="News_article_link">Lire l'article</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default News;