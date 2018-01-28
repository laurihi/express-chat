const express = require('express')
const bodyParser = require('body-parser');
const cors =  require('cors');
var path = require('path');

const app = express()


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'))
}
)


app.listen(3000, () => console.log('Listening on port 3000...'))
