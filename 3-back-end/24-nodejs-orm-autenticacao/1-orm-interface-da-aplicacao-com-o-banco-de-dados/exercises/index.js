const express = require('express');
const Book = require('./controllers/Book');

const app = express();
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);

app.post('/books', Book.create);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
