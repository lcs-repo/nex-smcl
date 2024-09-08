import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const clientOptions = { serverApi: { version: '1' as const, strict: true, deprecationErrors: true } };

console.log('MongoDB URI:', uri.replace(/\/\/.*@/, '//****:****@'));

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri as string, clientOptions);
    if (mongoose.connection.readyState === 1) {
      console.log("Successfully connected to MongoDB");
    } else {
      throw new Error('MongoDB connection is not ready');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      if (error.message.includes('bad auth')) {
        console.error('Authentication failed. Please check your MongoDB URI, username, and password.');
      } else if (error.message.includes('ECONNREFUSED')) {
        console.error('Connection refused. Please check if your IP is whitelisted in MongoDB Atlas.');
      }
    }
    throw new Error(`Unable to connect to MongoDB: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
}