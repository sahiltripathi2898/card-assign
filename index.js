const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// To resolve cors error
app.use(cors());

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

// Configuring the database
const dbConfig = require('./database.js');
const mongoose = require('mongoose');

//Using Promises instead of async await
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database.', err);
    process.exit();
  });

//Routes middleware
app.use('/', require('./routes.js'));

//Port Connection
const PORT = process.env.PORT || 5000;
// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
