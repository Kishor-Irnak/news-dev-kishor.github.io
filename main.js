document.addEventListener('DOMContentLoaded', () => {
    // Display default news (general category) upon page load
    getNews('general');
  
    const businessBtn = document.getElementById('business-btn');
    const entertainmentBtn = document.getElementById('entertainment-btn');
    const healthBtn = document.getElementById('health-btn');
    const scienceBtn = document.getElementById('science-btn');
    const sportsBtn = document.getElementById('sports-btn');
    const technologyBtn = document.getElementById('technology-btn');
  
    businessBtn.addEventListener('click', () => getNews('business'));
    entertainmentBtn.addEventListener('click', () => getNews('entertainment'));
    healthBtn.addEventListener('click', () => getNews('health'));
    scienceBtn.addEventListener('click', () => getNews('science'));
    sportsBtn.addEventListener('click', () => getNews('sports'));
    technologyBtn.addEventListener('click', () => getNews('technology'));
  });
  
  function getNews(category) {
    let url = '';
    switch (category) {
      case 'general':
        url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'business':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'entertainment':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'health':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'science':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'sports':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=47942b307f5542298263499d07d8345f';
        break;
      case 'technology':
        url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=47942b307f5542298263499d07d8345f';
        break;
      default:
        console.error('Invalid category');
        return;
    }
  
    fetchNews(url);
  }
  
  function fetchNews(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayNews(data.articles);
      })
      .catch(error => console.error('Error fetching news:', error));
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
  
