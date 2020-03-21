# WeatherApp

This is a web App to get the weather and the description of user desired location.

 ### How to use

  * Download the ZIP file or clone it to your pc.
  
  * Unzip the file
  * Run ``npm install ``
  * Now start the server ``node app.js``
  
  * Open https://localhost:3000
  
  * Enter the desired location
  
  * Click submit
  
 ### Before opening the index.html
 
 Go to [Open Weather](https://openweather.org) and crete an account if you don't have. Then create your own API key or generate. Copy your API key , then head over to app.js file and update the API key



 Before(line 22 in app.js)
 ``` 
 const apikey = "";//
 ```
 
 
 After
 ```
  const apikey = {yourAPIkey};
 ```
 
 To run the App install all the required packages like express.js, body-parser, https through npm.
#### Frameworks and API used
1. Node.js
2. Express.js
3. Open Weather API
