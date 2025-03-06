import React, { useState } from 'react';

import s from './newsForm.module.scss';

export const NewsForm = ({ news, setNews }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        const newItem = { id: Date.now(), title, content };

        const updatedNews = [...news, newItem];
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={s.inputText}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className={s.inputText}
            />
            <button type="submit" className={s.formButton}>Add News</button>
        </form>
    );
};