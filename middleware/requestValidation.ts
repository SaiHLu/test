import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { string, object } from 'yup';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function requestValidation(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
      try {
        req.body = await schema
          .validate({
            body: req.body || {},
            query: req.query,
          }, { stripUnknown: true });
      } catch (error) {
        return res.status(400).json(error);
      }
    }
    await handler(req, res);
  };
}