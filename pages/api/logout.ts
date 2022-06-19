import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const serializeCookie = serialize('myJwt', '', {
        maxAge: -1, // one week
        expires: new Date(Date.now() + 604_800), // one week
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      })

      res.setHeader('Set-Cookie', serializeCookie)

      res.json({ message: 'Logout' })
    } catch (error: any) {
      console.log('Logout Error: ', error)
      res.json({ error: error.message })
    }
  }

  return res.status(400).json({ error: 'Method not supported' })
}
