// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

// Initialize app
app = express();
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hola');
});

// Listen server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});