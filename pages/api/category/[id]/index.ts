
import { NextApiRequest, NextApiResponse } from 'next';
import { requestValidation } from 'middleware/requestValidation';
import { getCategoryValidation } from 'validations/categoryValidations';
import { getCategory } from 'services/category.service';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string
    const category = await getCategory({id});
    res.status(200).json(category);
  } catch (error: any) {
    res.json(error)
  }
};

export default requestValidation(getCategoryValidation, handler);
