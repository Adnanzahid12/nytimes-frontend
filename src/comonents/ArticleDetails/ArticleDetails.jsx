import React, { useEffect, useContext } from 'react';
import { DataContext } from '../dataProvider/dataProvider';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
    const { id } = useParams();
    // Getting the arcticles data using useContext hook
    const { articles } = useContext(DataContext)

    const article = articles?.find((a) => a?._id.split("/").reverse()[0] === id);
    // If article is empty 
    if (!article) return <p>Article not found!</p>;
    
    return (
        <div>
            <a href="https://developer.nytimes.com" target='_blank'>
                <img alt="The New York Times" src="/news-logo.png" />
            </a>
            <h1>{article.headline.main}</h1>
            <p><strong>Source:</strong> {article.source}</p>
            <p><strong>Published Date:</strong> {article.pub_date}</p>
            <p><strong>Abstract:</strong> {article.abstract}</p>
            <p><strong>Lead Paragraph:</strong> {article.lead_paragraph}</p>
            <a href={article.web_url} target="_blank">Read Full Article</a>
        </div>
    );
};

export default ArticleDetails;
