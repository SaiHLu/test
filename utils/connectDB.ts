import mongoose from 'mongoose';

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    await mongoose.connect(process.env.MONGO_URI!)
  }
}
