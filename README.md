# Weather-Journal App Project

## Overview

This is the first project for the Udacity Front-End Developer course.

It is an asynchronous web app that uses Web API from OpenWeather website and user input data to dynamically update the UI and show:
1) the current date, 
2) the city based on the zip code entered by the user,
3) the temperature in the city, retrieved from an external website, and
4) the feelings of the user as entered by the user.

## Description

This app takes two inputs from the user: the zip code and the feeling of the user,
requests temperature from an external source - Open Weather website for the zipcode entered by the user.
This information is then sent to the server API endpoint.
And when the user clicks on the button "Generate", the information is retrieved from 
the server API endpoint and is used to dynamically update the user interface.

The app has GET and POST call back functions set up on the server side. 

There are three asyncronous JS functions on the client side:
One function posts data to the server API endpoint.
One function retrieves data from the server API endpoint.
And the main function retrieves data from the external Weather API, posts it to the server endpoint, retrieves it from the server endpoint and uses the data to dymanically update the user interface.

