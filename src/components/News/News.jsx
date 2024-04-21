//Fonction pour afficher les daily report de l'iss
import React, { useEffect, useState } from 'react';
import './News.css';
import axios from 'axios';

function News() {
    const [isVisible, setIsVisible] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spaceflightnewsapi.net/v4/reports?limit=6');
                console.log('Response from API:', response.data);
                if (Array.isArray(response.data.results)) {
                    setNews(response.data.results);
                } else {
                    console.error('Results array not found in API response:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                fetchData();
                observer.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        });

        observer.observe(document.querySelector('.News'));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="News">
            <h2 className="News_title">Rapports Journalier:</h2>
            <div className="News_container">
                {!isVisible && (
                    <div className="news-facade">
                        <p>Chargement des nouvelles...</p>
                    </div>
                )}
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
