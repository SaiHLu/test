import { NextApiRequest, NextApiResponse } from 'next'
import { requestValidation } from 'middleware/requestValidation'
import { getBlogValidation } from 'validations/blogValidations'
import { getBlog } from 'services/blog.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string
    const blog = await getBlog({ id })
    res.status(200).json(blog)
  } catch (error: any) {
    res.json(error)
  }
}

export default requestValidation(getBlogValidation, handler)
