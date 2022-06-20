import { NextApiRequest, NextApiResponse } from 'next'
import { requestValidation } from 'middleware/requestValidation'
import { createBlogValidation } from 'validations/blogValidations'
import { createBlog } from 'services/blog.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not supported' })

  try {
    const blog = await createBlog(req.body.body)
    res.status(200).json(blog)
  } catch (error: any) {
    if (error.code && error.code == 11000)
      res.status(400).json({ error: 'this blog already exists' })

    res.status(400).json(error)
  }
}

export default requestValidation(createBlogValidation, handler)
