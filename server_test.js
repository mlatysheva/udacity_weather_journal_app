const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());

app.post('/add', function(req, res){
    console.log(req.body.name);
});

const port = 8000;

const server = app.listen(port, () => {
    console.log(`The server is running on localhost: ${port}`)
})

