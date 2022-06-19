// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from 'services/blog.service'
import { connectDB } from 'utils/connectDB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  try {
    await connectDB()

    const page = +req.query.page

    const blogs = await getAllBlogs(page)

     res.json(blogs)
  } catch(error: any) {
    res.json({error: error.message})
  }
}
