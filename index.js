const express = require('express')
const app = express()

var cors = require('cors')
const port = 5000


app.use(cors())

// data 
const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')
const review = require('./data/review.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get("/review", (req, res) => {
    res.send(review)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const singleRecipe = recipe.find((r) => r.chef_id == id)
    res.send(singleRecipe)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})