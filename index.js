const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const home = require('./routes/home');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB successfuly...'))
.catch((err) => console.log('Cannot connect to MongoDB'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));