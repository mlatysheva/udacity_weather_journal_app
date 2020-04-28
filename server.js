// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app

const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

// Produce feedback from the server through a callback function
const server = app.listen(port, () => {
    console.log(`The server is running on localhost: ${port}`)
})

// Setup a GET route to return the app endpoint data
app.get('/all', function (request, response) {
	console.log(request);
	response.send(projectData);
})

// Add a new entry to the projectData based on the data received from the client side

app.post('/add', postData);

function postData(request, response) {
	const newData = {
		temperature: request.body.temperature,
		date: request.body.date,
		userResponse: request.body.userResponse
	};
	projectData.push(newData);
	response.send(projectData);
}