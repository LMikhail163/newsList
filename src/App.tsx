import React, { useState, useEffect } from 'react';
import {NewsList} from './components/newsList/newsList.tsx';
import {NewsForm} from "./components/newsForm/newsForm.tsx";

import './App.css'

function App() {
  const [news, setNews] = useState([]);

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