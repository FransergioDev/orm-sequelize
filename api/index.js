const express = require('express');
const routes = require('./routes');

const PORT = 3000;

const app = express();

routes(app);

app.listen(PORT, console.log(`Run server ${PORT}....`))

module.exports = app;