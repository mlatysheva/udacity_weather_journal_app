// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
/* Middleware*/
const bodyParser = require('body-parser');

// Start up an instance of app

const app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// // Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

// Produce feedback from the server through a callback function
const server = app.listen(port, () => {
    console.log(`The server is running on localhost: ${port}`)
})

// Setup a GET route to send the app endpoint data
app.get('/all', function (request, response) {
	//console.log(request);
	response.send(projectData);
})

// Add a new entry to the projectData based on the data received from the client side
// via the POST route
app.post('/add', postData);

function postData(request, response) {
	console.log(request.body);
	const newData = {
		date: request.body.date,
		city: request.body.city,
		temperature: request.body.temperature,
		userResponse: request.body.userResponse
	};
	projectData.push(newData);
	console.log(projectData);
	response.send(projectData);	
}
