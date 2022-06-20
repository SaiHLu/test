import { NextApiRequest, NextApiResponse } from 'next'
import { requestValidation } from 'middleware/requestValidation'
import { deleteCategoryValidation } from 'validations/categoryValidations'
import { deleteCategory } from 'services/category.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string
    const category = await deleteCategory({ id })
    res
      .status(200)
      .json({ message: `Category ${category.name} has been deleted.` })
  } catch (error: any) {
    res.status(400).json(error)
  }
}

export default requestValidation(deleteCategoryValidation, handler)
