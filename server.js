const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('./dist/weatherapp'))

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/weatherapp/'}),
);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
