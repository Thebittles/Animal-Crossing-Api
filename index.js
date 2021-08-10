const express = require('express')
const app = express();

app.use(express.static('public'))

//Requiring morgan
const logger = require('morgan')
app.use(logger('dev'))

//set the view engine
app.set("view engine", "ejs")


const endpoint = `https://acnhapi.com/v1/`


// Routes
app.get('/', (req, res) => {
    res.render('home')
})


// Port & Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App listening on port... ${PORT}`)
})