import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully Connected to Database`);
  } catch (error) {
    console.error(`Successfully connection error:  ${error}`);
    process.exit(1);
  }
};

export default connectDB;
