const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, _ => {
  console.log(`App running on port: ${PORT}`)
})