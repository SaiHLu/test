// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { allCategories } from 'services/category.service'
import { connectDB } from 'utils/connectDB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connectDB()

    const categories = await allCategories()

    res.json(categories)
  } catch (error: any) {
    res.json({ error: error.message })
  }
}
