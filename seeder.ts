import mongoose from 'mongoose'
import User from './models/User'
import { createHash } from './utils/hash'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + '/.env.local' })

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('DB Connected'))
  .catch((error) => console.log('DB Connection Failed', error.message))

const seedUser = async () => {
  try {
    await User.deleteMany()

    await User.create({
      email: 'admin@admin.com',
      password: await createHash('admin'),
    })

    console.log('Seeded user')

    process.exit()
  } catch (error) {
    process.exit(1)
  }
}

const dropUser = async () => {
  try {
    await User.deleteMany()

    console.log('Dropped user')

    process.exit()
  } catch (error) {
    process.exit(1)
  }
}

if (process.argv[2] == '-d') dropUser()
else seedUser()
