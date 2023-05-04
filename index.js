const express = require('express')
const app = express()
// 3
var cors = require('cors')
const port = 5000

// 3
app.use(cors())
// 2
const chef = require('./data/chef.json')
//4
const recipe = require('./data/recipe.json')

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

//5
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const singleRecipe = recipe.find((r) => r.chef_id == id)
    res.send(singleRecipe)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})