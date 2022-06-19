import User from "models/User";
import { compareHash } from "utils/hash";

export async function findUserByEmail(email:string) {
  try {
    const user = await User.findOne({email}).exec()

    if(!user) throw new Error('User not found')

    return user
  } catch(error) {
    console.log('Find User Error', error)
    throw error
  }
} 

export async function validateUser(email: string, password: string) {
  try {
    const user = await findUserByEmail(email);

    console.log(email, password)
    const isCorrectPwd = await compareHash(
      password,
      user.password,
    );

    if (user && isCorrectPwd) return user;

    throw new Error('Invalid Credentials')
  } catch (error) {
    throw error
  }
}