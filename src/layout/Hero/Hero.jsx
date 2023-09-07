import React, { useState, useEffect } from 'react';
import News from '../../api/News';
import { Paragraph } from '../../globalStyles';

const Hero = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async function runEffect() {
      try {
        const fetchedNews = await News.fetchAll();
        if (fetchedNews && fetchedNews.length > 0) {
          setNews(fetchedNews);
          setLoading(false);
        }
      } catch (error) {
        setError('Error: houve erro no servidor, por favor tente novamente mais tarde!');
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  } else if (error) {
    return <Paragraph>{error}</Paragraph>;
  } else if (!loading && !error) {
    return (
      <div>
        <h1>News</h1>
        <div>
          {news.map((newItem) => {
            return (
              <div key={newItem.id}>
                <h4>{newItem.title}</h4>
                <Paragraph>{newItem.content}</Paragraph>
                <Paragraph>{newItem.date}</Paragraph>
                <Paragraph>{newItem.creator}</Paragraph>
                <Paragraph>{newItem.categoryId}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Hero;
