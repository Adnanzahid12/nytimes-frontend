import { createContext, useState } from 'react';


const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('');

    const handleFetch = async () => {
        try {
            // Fetching the data from nytimes
            const response = await fetch(`http://localhost:5000/data?query=${query}`);
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const data = await response.json();

            setArticles(data?.response?.docs);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    return (
        <DataContext.Provider value={{ query, setQuery, articles, handleFetch }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
