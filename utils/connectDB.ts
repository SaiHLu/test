import mongoose from 'mongoose'
import 'models/Blog.ts'
import 'models/Category.ts'
import 'models/User.ts'

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return
  } else {
    await mongoose.connect(process.env.MONGO_URI!)
  }
}

export const disconnectDB = async () => {
  await mongoose.connection.close()
}
