// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

const connection = require('./connection');
const adminloginRoutes = require('./routes/adminlogin');
const customerRoutes = require('./routes/routes');

app.use('/', customerRoutes);
app.use('/', adminloginRoutes);
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is live on http://localhost:${port}`);
});
