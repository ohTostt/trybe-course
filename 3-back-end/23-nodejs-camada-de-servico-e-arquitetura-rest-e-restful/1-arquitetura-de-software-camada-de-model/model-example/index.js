const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const app = express();
const port = process.env.PORT || 3000;

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/books', (req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
