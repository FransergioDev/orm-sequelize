const express = require('express')
//const sequelize = require('sequelize');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.get('/api', () => {})
/*
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/

app.listen(PORT, console.log(`Run server ${PORT}....`))

module.exports = app;