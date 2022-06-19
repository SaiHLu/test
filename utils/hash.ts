import * as bcrypt from 'bcrypt';

export async function createHash(password: string) {
  const saltOrRounds = await bcrypt.genSalt();
  return await bcrypt.hash(password, saltOrRounds);
}

export async function compareHash(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}