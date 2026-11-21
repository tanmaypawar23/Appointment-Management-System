import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database!!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};
export default connectMongoDB;
