# TLSA
## Introduction
This project is a web application for the Thai-Lao Student Association at the University of Florida. It keeps track of a calendar of events and allows users to sign in and check in as attending those events, as well as keeping track of the number of events a user has attended and allowing administrators to reset that number at the end of the semester. 
## Installation
The project uses Node.js, React, Express, and a MongoDB. To use it with your own data, replace the connection string in `config/config.js` with a connection string for your own MongoDB instance. You can install Node by using the package manager of your choice on any UNIX-based operating system.
Otherwise, the project can be installed locally by simply cloning this repo. 
## Usage
To deploy the project locally, simply ensure that your IP is whitelisted by your MongoDB instance and run
```
npm run heroku-postbuild
npm start
```
in the root folder.