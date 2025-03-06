import React from 'react';

import s from './newsList.module.scss';

export const NewsList = ({ news, setNews }) => {
    const deleteNews = (id) => {
        const updatedNews = news.filter(item => item.id !== id);
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
    };

    const updateNews = (item) => {
        const newTitle = prompt('New title:', item.title) || item.title;
        const newContent = prompt('New content:', item.content) || item.content;

        const updatedItem = { ...item, title: newTitle, content: newContent };
        const updatedNews = news.map(newsItem => newsItem.id === updatedItem.id ? updatedItem : newsItem);

        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
    };

    return (
        <div className={s.list}>
            {news.map(item => (
                <div key={item.id} className={s.item}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>


                    <div className={s.btnContainer}>
                        <button onClick={() => deleteNews(item.id)}>Delete</button>
                        <button onClick={() => updateNews(item)}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
};