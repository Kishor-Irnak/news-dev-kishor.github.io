document.addEventListener('DOMContentLoaded', () => {
    const cachedNews = localStorage.getItem('cachedNews');
    if (cachedNews) {
      displayNews(JSON.parse(cachedNews));
    } else {
      getNews();
    }
  });
  
  function getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=47942b307f5542298263499d07d8345f';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('cachedNews', JSON.stringify(data.articles));
        displayNews(data.articles);
      })
      .catch(error => console.log('Error fetching news:', error));
  }
  
  function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Clear previous news items
    
    articles.forEach(article => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      
      const title = document.createElement('h2');
      title.textContent = article.title;
      
      const description = document.createElement('p');
      description.textContent = article.description;
      
      const source = document.createElement('p');
      source.textContent = `Source: ${article.source.name}`;
      
      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = 'Read more';
      link.target = '_blank';
      
      newsItem.appendChild(title);
      newsItem.appendChild(description);
      newsItem.appendChild(source);
      newsItem.appendChild(link);
      
      newsList.appendChild(newsItem);
    });
  }
  