import mongoose from "mongoose";

const connect = async () => {
  const endpoint = process.env.MONGO_URI;

  try {
    if (!endpoint) {
      throw new Error("MongoDB URI not found in environment variables.");
    }

    await mongoose.connect(endpoint);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connect;
