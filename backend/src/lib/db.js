import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB connected", conn.connection.host);
  } catch (error) {
    console.error("Error connecting DB", error);
    process.exit(1);
  }
};
