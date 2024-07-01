const express = require('express');
const controller = require('./Controller');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on controller
app.use(controller);
app.use(express.static(__public));
//TO DO: create public folder for everything to be available to the client

sequelize.authenticate()
  .then(function () {
    console.log("CONNECTED!");
  })
  .catch(function (err) {
    console.log("SOMETHING DONE GOOFED: " + err);
  });
//turn on connection to db and server
  sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now listening'));
 });
