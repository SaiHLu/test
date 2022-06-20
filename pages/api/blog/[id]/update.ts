import { NextApiRequest, NextApiResponse } from 'next'
import { requestValidation } from 'middleware/requestValidation'
import { updateBlogValidation } from 'validations/blogValidations'
import { updateBlog } from 'services/blog.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!['PUT', 'PATCH'].includes(req.method!))
    return res.status(400).json({ error: 'Method not supported' })

  try {
    const id = req.query.id as string
    const blog = await updateBlog(id, req.body.body)
    res.status(200).json(blog)
  } catch (error: any) {
    if (error.code && error.code == 11000)
      res.status(400).json({ error: 'this blog already exists' })
    res.status(400).json(error)
  }
}

export default requestValidation(updateBlogValidation, handler)
