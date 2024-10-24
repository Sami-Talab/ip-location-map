import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

function App() {
  //state variables for location and error message
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // check if the geolocation feature is available in the browser
    if ('geolocation' in navigator) {
      // get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          // if an error occurs, set an error message and log it
          setErrorMessage('Unable to retrieve location.');
          console.error(error);
        }
      );
    } else {
      // if geolocation is not supported, set an error message
      setErrorMessage('Geolocation is not supported by your browser.');
    }
  }, []);

  //render the app's ui
  return (
    <div className="App">
      <h1>Accurate Geolocation</h1>
      {location ? (
        <>
          <p>Your location: Latitude {location.latitude}, Longitude {location.longitude}</p>
          <MapComponent latitude={location.latitude} longitude={location.longitude} />
        </>
      ) : (
        //display the error message or a loading message if location unavaible 
        <p>{errorMessage || 'Getting location...'}</p>
      )}
    </div>
  );
}

//export
export default App;
