import mongoose from "mongoose";

const dbConnection = {};
export const connectToDatabase = async () => {
  try {
    if (dbConnection.isConnected) {
      console.log("Using existing database connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    dbConnection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to database");
  }
};
