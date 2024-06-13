import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(
      "Connected to MongoDB at host",
      connectioninstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};
export default connectDB;
