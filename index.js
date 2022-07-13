const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const app = express();
const home = require('./routes/home');

mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB successfuly...'))
.catch((err) => console.log('Cannot connect to MongoDB'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));