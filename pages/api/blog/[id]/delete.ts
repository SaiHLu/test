
import { NextApiRequest, NextApiResponse } from 'next';
import { requestValidation } from 'middleware/requestValidation';
import { deleteBlogValidation } from 'validations/blogValidations';
import { deleteBlog } from 'services/blog.service';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string
    const blog = await deleteBlog({id});
    res.status(200).json({message: `Blog ${blog.title} has been deleted.`});
  } catch (error: any) {
    res.status(400).json(error)
  }
};

export default requestValidation(deleteBlogValidation, handler);
