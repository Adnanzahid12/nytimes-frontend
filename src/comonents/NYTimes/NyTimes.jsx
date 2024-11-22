import React, { useContext } from 'react';
import { DataContext } from '../dataProvider/dataProvider';
import { Link } from 'react-router-dom';

const NyTimes = () => {
    // Getting the values using useContext
    const { query, setQuery, articles, handleFetch } = useContext(DataContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleFetch();
    };

    return (

        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles"
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {articles?.map((article) => {
                    const id = article._id.split("/").reverse()
                    return (
                        <li key={article._id}>
                            <Link to={`/article-details/${id[0]}`}>{article.headline.main}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default NyTimes;

