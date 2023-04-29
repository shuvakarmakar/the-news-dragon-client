// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();
    const catagoryNews = useLoaderData();
    return (
        <div>
            {
                catagoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;