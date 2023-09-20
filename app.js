// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const foods = require('./routes/api/foods');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to my food app backend server!'));

// use Routes
app.use('/api/foods', foods);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
