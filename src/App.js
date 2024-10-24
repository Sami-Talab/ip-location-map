import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

function App() {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setErrorMessage('Unable to retrieve location.');
          console.error(error);
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by your browser.');
    }
  }, []);

  return (
    <div className="App">
      <h1>Accurate Geolocation</h1>
      {location ? (
        <>
          <p>Your location: Latitude {location.latitude}, Longitude {location.longitude}</p>
          <MapComponent latitude={location.latitude} longitude={location.longitude} />
        </>
      ) : (
        <p>{errorMessage || 'Getting location...'}</p>
      )}
    </div>
  );
}

export default App;
