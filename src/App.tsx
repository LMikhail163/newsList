import { useState, useEffect } from 'react';
import {NewsList} from './components/newsList/newsList.tsx';
import {NewsForm} from "./components/newsForm/newsForm.tsx";

import './App.css'

export type newsType = {
    id: number;
    title: string;
    content: string;
}

function App() {
  const [news, setNews] = useState<newsType[]>([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news') || '[]');
    setNews(storedNews);
  }, []);


  return (
      <div className="newsList">
        <h1>News List</h1>
        <NewsForm news={news} setNews={setNews} />
        <NewsList news={news} setNews={setNews} />
      </div>
  );
}

export default App;