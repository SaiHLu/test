import type { NextApiRequest, NextApiResponse } from 'next'
import * as jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { validateUser } from 'services/user.service'
import { connectDB } from 'utils/connectDB'
import { cookieOptions, JWT_SECRET } from 'utils/cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not supported' })

  try {
    await connectDB()
    const { email, password } = req.body
    const user = await validateUser(email, password)

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
        email: user.email,
      },
      JWT_SECRET,
    )

    const serializeCookie = serialize('myJwt', token, {
      maxAge: 604_800, // one week
      expires: new Date(Date.now() + 604_800), // one week
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })

    res.setHeader('Set-Cookie', serializeCookie)

    res.json({
      accessToken: token,
      user,
    })
  } catch (error: any) {
    console.log('Login Error: ', error)
    res.json({ error: error.message })
  }
}
