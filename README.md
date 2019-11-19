## One Day Earthquake Information Platform

This is an earthquake today web application which was implemented by React hooks. Leverage on React Table and Leaflet.

* User is able to visualize the earthquake happened locations on the interactive earth map. 
* There is a table which provides user to view the dataset also able to do sorting, filtering and pagination.

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

To Run Test Suite:  

`npm test`

## External Library
* [React Table](https://www.npmjs.com/package/react-table)
* [React Leaflet](https://react-leaflet.js.org/)

## Unit Test Library
* [React Testing Library](https://github.com/testing-library/react-testing-library)

## Unit Coverage
* PASS  src/App.test.js
* PASS  src/Components/Table/Table.test.jsx
* PASS  src/Components/Title/Title.test.jsx
* PASS  src/util/helper.test.js

Test Suites: 4 passed, 4 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        2.956s, estimated 4s

## Dataset source
[earthquake.usgs.gov](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp)

## TODO
This is a very brief list of things that I would love to work on given more time:
* Interaction between map and table (e.g. filtered data from table are highlighted on map)
* Implement real time update (monitoring)
* Increase unit test coverage
* Custom some filters (e.g. slider for number column, dropdown for type)

## Authors

**Stanley Hsu**
