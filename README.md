# WeatherApp

This is a web App to get the weather and it's description of user desired location.

 ### How to use

  * Download the ZIP file or clone it to your pc.
  
  * Unzip the file
  
  * Open the index.html with live server using any browser
  
  * Enter the desired location
  
  * Click submit
  
 ### Before opening the index.html
 
 Go to [Open Weather](https://openweather.org) and crete your account if you don't have. Then create your own API key or generate. Copy your API key , then head over to app.js file and update the API key



 Before(line 22 in app.js)
 ``` 
 const apikey = "";//
 ```
 
 
 After
 ```
  const apikey = {yourAPIkey};
 ```
 
 
#### Frameworks and API used
1. Node.js
2. Express.js
3. Open Weather API
