const config = require('./node_modules/config');
const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const home = require('./routes/home');
const app = express();

if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.')
    process.exit(1);
}

mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB successfuly...'))
.catch((err) => console.log('Cannot connect to MongoDB'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));