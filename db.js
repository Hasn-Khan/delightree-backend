const mongoose = require('mongoose');
const config=require('./config')

async function connectToDB() {
  try {
    const mongoURI = config.mongoURI;

    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports={
  connectToDB
}
