
import { NextApiRequest, NextApiResponse } from 'next';
import { requestValidation } from 'middleware/requestValidation';
import { updateCategoryValidation } from 'validations/categoryValidations';
import { updateCategory } from 'services/category.service';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!["PUT", "PATCH"].includes(req.method!)) return res.status(400).json({ error: 'Method not supported' })

  try {
    const id = req.query.id as string
    const category = await updateCategory(id, req.body.body);
    res.status(200).json(category);
  } catch (error: any) {
    if (error.code && error.code == 11000) res.status(400).json({ error: 'this category already exists' })
    res.status(400).json(error)
  }
};

export default requestValidation(updateCategoryValidation, handler);
