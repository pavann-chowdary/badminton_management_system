// api/db.js
import mongoose from 'mongoose';
import config from './config'; 

const MONGODB_URI = config.MONGODB_URI; // Get the URI from config

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const connection = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedDb = connection;
  console.log('MongoDB Connected');
  return connection;
}

export default connectToDatabase;