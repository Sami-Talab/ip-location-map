# IP Location and Geolocation Map

This is a simple React project that fetches the user's IP-based location using the browser's Geolocation API and displays it on an interactive map using Leaflet. This project solves the problem of displaying a user's accurate geographic location in real time, which can be useful for applications like tracking, geotargeting, or mapping services.

## Features

- Uses the **Geolocation API** to get the user's precise latitude and longitude.
- Displays the user's location on a map using **Leaflet**.
- Provides fallback information in case geolocation is not supported by the user's browser.

## Problem It Solves

Many IP-based location services are inaccurate due to the way IP addresses are distributed and managed. This project uses the browser's built-in Geolocation API for more precise location data, making it useful for real-world applications where accuracy is critical, such as location-based services and geo-aware applications.

## Technologies Used

- React.js
- Leaflet.js for maps
- Browser's Geolocation API

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ip-location-map.git

2. Navigate to the project directory:
    ```bash
    cd ip-location-map

3. Install dependencies:
    ```bash
    npm install

### Running the project
1. Start the development server:
    ```bash
    npm start

2. Open your browser and go to http://localhost:3000. 
The app will prompt for location access to fetch your current location and display it on the map.

### AI credit:
The project was simple and minimal AI was used.
I had an issue of getting the wrong location and chatGPT recommended using Geolocation API instead of ipapi which was I was using. 
AI also assisted with the formatting especially the centring and zooming functionalities.

### AI generated code lines:
- navigator.geolocation.getCurrentPosition replaced previous code that used ipapi

     