import * as yup from 'yup'

export const createCategoryValidation = yup.object({
  body: yup.object({
    name: yup.string().required("Name is required."),
  })
})

export const getCategoryValidation = yup.object({
  query: yup.object({
    id: yup.string().required("Id is required"),
  })
})

export const updateCategoryValidation = yup.object({
  query: yup.object({
    id: yup.string().required("Id is required"),
  }),
  body: yup.object({
    name: yup.string().required("Name is required."),
  })
})

export const deleteCategoryValidation = yup.object({
  query: yup.object({
    id: yup.string().required("Id is required"),
  })
})

export type createCategoryType = yup.TypeOf<typeof createCategoryValidation.fields["body"]>
export type getCategoryType = yup.TypeOf<typeof getCategoryValidation.fields['query']>
export type updateCategoryType = yup.TypeOf<typeof updateCategoryValidation.fields["body"]>
export type deleteCategoryType = yup.TypeOf<typeof deleteCategoryValidation.fields["query"]>