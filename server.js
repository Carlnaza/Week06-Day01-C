const express = require('express')
const app = express()
let PORT = 3000

// Fake Dabatase
const movies = require('./movies.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Get movies from database
app.get('/api/movies', (req, res) => {

    res.json({
        status: 200,
        data: movies
    })
})

app.get('/api/movies/random_movie', (req, res) => {

    res.json({
        status: 200,
        data: movies[Math.floor(Math.random() * movies.length)]
    })
})

// Add new movies to our database
app.post('/api/movies', (req, res) => {

    let newMovie = {
        "title": req.body.title,
        "director": req.body.director
    }

    movies.push(newMovie)

    res.sendStatus(200)

})

// Delete a movie from our database
app.delete('/api/movies/:index', (req, res) => {

    movies.splice(req.params.index, 1)

    res.sendStatus(200)

})

// Update a movie from our database
app.put('/api/movies/:index', (req, res) => {

    let updates = {
        "title": req.body.title,
        "director": req.body.director
    }

    movies[req.params.index] = updates

    res.sendStatus(200)
})



app.listen(PORT, () => {
    console.log(`Your server is now listening ${PORT}`)
})