const express = require('express')
const app = express()

const port = 5000


// 2
const chef = require('./data/chef.json')
//4
const recipe = require('./data/recipe.json')
const review = require('./data/review.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 2
app.get('/chef', (req, res) => {
    res.send(chef)
})
//4
app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get("/review", (req, res) => {
    res.send(review)
})

//5
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const singleRecipe = recipe.find((r) => r.chef_id == id)
    res.send(singleRecipe)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})