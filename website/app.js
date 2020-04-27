/* Global Variables */
const button = document.getElementById('generate');

const keyApi = '8dc756c0423cac4346ce3ea6b072d38f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKeyUrl = "&units=metric&APPID=8dc756c0423cac4346ce3ea6b072d38f";
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}


// Get weather data from the Open Weather website by zip code

const getWeatherData = async (event)=>{
    const zip = document.getElementById('zip').value;
    //const feelings = document.getElementById('feelings').value;
    const entireUrl = (baseUrl + zip + apiKeyUrl);
    const response = await fetch(entireUrl)
    try {  
      const data = await response.json();
      console.log(data)
      return data;
    } catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
// Set the button Generate to listen to a click

button.addEventListener('click', getWeatherData);