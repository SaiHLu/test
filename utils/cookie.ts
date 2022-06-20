export const JWT_SECRET = process.env.JWT_SECRET! || 'super secret'

export const cookieOptions = {
  maxAge: 604_800, // one week
  expires: new Date(Date.now() + 604_800), // one week
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
}
