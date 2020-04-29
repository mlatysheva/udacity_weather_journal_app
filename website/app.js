//import { response, request } from "express";

/* Global Variables */
const button = document.getElementById('generate');
let today = new Date().toLocaleDateString();

/* Syntacsis for the api request:
 api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key} */
const keyApi = '8dc756c0423cac4346ce3ea6b072d38f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKeyUrl = "&units=metric&APPID=8dc756c0423cac4346ce3ea6b072d38f";

// Integrate OpenWeatherMap API and receive weather for the zip code entered by the user

const getWeatherData = async (event) => {
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  const entireUrl = (baseUrl + zip + apiKeyUrl);
  const response = await fetch(entireUrl)
  try {
    const data = await response.json();
    console.log(data);
    postData('http://localhost:8000/add', { date: today, city: data.name, temperature: data.main.temp, userResponse: feelings });
    getData('http://localhost:8000/all');
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Get data from the app endpoint as an asyncronous function
// and update dynamically the UI
const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  try {
    const userData = await response.json();
    document.getElementById('date').innerHTML = `Today's date is ${userData[0].date}`;
    document.getElementById('city').innerHTML = `Your city is ${userData[0].city}`;
    document.getElementById('temp').innerHTML = `Today's temperature is ${userData[0].temperature} Celcius`;
    document.getElementById('content').innerHTML = `You feel today ${userData[0].userResponse}.`;

  } catch (error) {
    console.log('error', error);
  }
}

// Post data to the app endpoint as an asynchronous function

const postData = async (url = '', data = {}) => {
  //console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log('error', error);
  }
}

// Set the button Generate to listen to a click and call the function to 
// dynamically update the user interface

button.addEventListener('click', getWeatherData);

