/*const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = '97d09053fa86690605cbede7e12d902f'; // Replace with your NewsAPI key

app.use(cors());

app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch news' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/