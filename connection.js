// connection.js
const mongoose = require('mongoose');
const dotenv =require('dotenv');
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9fjmlcj.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB Atlas open");
  })
  .catch((error) => {
    console.log("Error while connecting to MongoDB Atlas", error);
  });

module.exports = mongoose;
