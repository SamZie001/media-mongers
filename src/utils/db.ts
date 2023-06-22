import mongoose from "mongoose";

const connect = async () => {
  let endpoint = process.env.MONGO_URI;

  try {
    if (endpoint) {
      await mongoose.connect(endpoint);
    } else {
      throw new Error("MongoDB URI not found in environment variables.");
    }
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export default connect;
