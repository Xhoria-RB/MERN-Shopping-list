const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();
const path = require('path');

//BodyParser middleware
app.use(bodyParser.json());

//DB config
const { mongoURI, PORT } = require('./config/keys');

//Connect to MongoDB
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//Middleware to handle the api routes
app.use('/api/items', items);

//Serve static assets if in prod
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/**
 * Express has implemented the body-parser directly into the framework, like Rob said :) So instead of writing

app.use(bodyParser.json()) you just simply write 

app.use(express.json())   No further installations required﻿
 */
