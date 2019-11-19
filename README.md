## Nested menus application

This is a nested menu web application which was implemented by React hooks.

* User is able to navigate down in directory, util find out the desired data sources.

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need latest `node` and `npm` installed globally on your machine.  

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

To Run Test Suite:  

`npm test`

## Technical Note
* When user selects a sub menu, application will fire an rest request to fetch next layer data.
* Application was implemented by recursion way for displaying nested menu structure.

## External Library
* [React | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) for icons
* [Prop Types](https://www.npmjs.com/package/prop-types) for strict type checking
* [Lodash FP](https://www.npmjs.com/package/lodash-fp)

## Unit Test Library
* [React Testing Library](https://github.com/testing-library/react-testing-library)

## Unit Coverage
* PASS  src/App.test.js
* PASS  src/components/Icon/Icon.test.jsx
* PASS  src/components/Node/Node.test.jsx
* PASS  src/components/Tree/Tree.test.jsx
* PASS  src/util/helper.test.js

Test Suites: 5 passed, 5 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        2.857s

## reference source
[SAP Education Hana](https://education.hana.ondemand.com/education/pub/s4/index.html)

## TODO
This is a very brief list of things that I would love to work on given more time:
* Implement collapsible feature on menu
* Improve UX (e.g. loading spinner right next to each folder when on click event happened)
* Improve the algorithm / data structure
* Increase unit test coverage
* Fix any edge case bugs

## Authors

**Stanley Hsu**
