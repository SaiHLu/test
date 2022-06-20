import { NextApiRequest, NextApiResponse } from 'next'
import { requestValidation } from 'middleware/requestValidation'
import { createCategoryValidation } from 'validations/categoryValidations'
import { createCategory } from 'services/category.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not supported' })

  try {
    const category = await createCategory(req.body.body)
    res.status(200).json(category)
  } catch (error: any) {
    if (error.code && error.code == 11000)
      res.status(400).json({ error: 'this category already exists' })

    res.status(400).json(error)
  }
}

export default requestValidation(createCategoryValidation, handler)
