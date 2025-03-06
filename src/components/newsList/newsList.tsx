import {newsType} from "../../App.tsx";

import s from './newsList.module.scss';

type propsType = {
    news: Array<newsType>;
    setNews: (news: Array<newsType>) => void;
}

export const NewsList = ({ news, setNews }: propsType) => {
    const deleteNews = (id: number) => {
        const updatedNews = news.filter(item => item.id !== id);
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
    };

    const updateNews = (item: newsType) => {
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