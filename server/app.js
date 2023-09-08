const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('./knexfile.js')["development"])

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());

//DEFAULT PAGE
app.get('/', (req, res) => {
    res.send('Application running, Please Use an Endpoint For API discovery')
})

//GET MOVIES
app.get('/movies', (req, res) => {
    knex('movie_title')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

//POST MOVIES
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    knex('movie_title')
        .insert(newMovie)
        .then(() => res.status(201).json('New movie has been added.'))
        .catch((err) => res.status(500).json(err));
});
//LISTEN PORT
app.listen(port, () => {
    console.log('Knex and Express applications running successfully')
})
