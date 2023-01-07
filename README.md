# ISS Tracking

![Vercel](https://vercelbadge.vercel.app/api/zlimteck/isstracking-react)
[![GitHub issues](https://img.shields.io/github/issues/zlimteck/isstracking-react)](https://github.com/zlimteck/isstracking-react/issues) [![GitHub forks](https://img.shields.io/github/forks/zlimteck/isstracking-react)](https://github.com/zlimteck/isstracking-react/network) [![GitHub stars](https://img.shields.io/github/stars/zlimteck/isstracking-react)](https://github.com/zlimteck/isstracking-react/stargazers) [![GitHub license](https://img.shields.io/github/license/zlimteck/isstracking-react)](https://github.com/zlimteck/isstracking-react/blob/master/LICENSE)

ISS Tracker is a React application that displays the current position of the International Space Station (ISS) on a Leaflet map and provides information on past and upcoming expeditions to the ISS. The app utilizes the [Where The ISS At API](https://api.wheretheiss.at/v1/satellites/25544) to retrieve the ISS's current location and the [ISS Tracking API](https://api.isstracking.xyz/v1/expeditions) to retrieve expedition data. The map is powered by Mapbox, and a Mapbox access token is required to use the app.

## Features

- Real-time tracking of the ISS on a map
- Information on past and upcoming expeditions to the ISS
- Responsive design for optimal viewing on different devices

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (included with Node.js)
- Mapbox access token - create a free account at [Mapbox](https://www.mapbox.com/) to obtain a token

### Installation

1. Clone the repository:

`git clone https://github.com/zlimteck/isstracking-react.git`

2. Navigate to the project directory:

`cd isstracking-react`

3. Create a `.env` file in the root of the project and add your Mapbox access token:

`REACT_APP_TOKEN_KEY=your_mapbox_access_token`

4. Install the dependencies:

`npm install`

5. Start the development server:

`npm start`

The app will now be running on [http://localhost:3000](http://localhost:3000).

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Leaflet](https://leafletjs.com/) - Open-source JavaScript library for interactive maps
- [Mapbox](https://www.mapbox.com/) - Mapping platform for custom designed maps 

- [Where The ISS At API](https://api.wheretheiss.at/v1/satellites/25544) - API for retrieving the current location of the ISS
- [ISS Tracking API](https://api.isstracking.xyz/v1/expeditions) - API for retrieving expedition data