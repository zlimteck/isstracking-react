import React, { useEffect, useState } from 'react';
import './News.css';
import axios from 'axios';

const images = [
    {
        id: 1,
        filename: "img/img_news.webp",
    },
];

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spaceflightnewsapi.net/v4/reports?limit=3');
                if (Array.isArray(response.data.results)) {
                    setNews(response.data.results);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    news.forEach((article) => {
        article.summary = article.summary.replace('[&#8230;]', '...');
    });

    return (
        <section className="News">
            <h2 className="News_title">Rapports Journalier:</h2>
            <div className="News_container">
                {news.map((article) => (
                    <div key={article.id} className="News_article">
                        <img src={process.env.PUBLIC_URL + '/' + images[0].filename} alt={article.title} className="News_image" loading="lazy"/>
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