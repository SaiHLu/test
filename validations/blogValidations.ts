import * as yup from 'yup'

export const createBlogValidation = yup.object({
  body: yup.object({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.'),
    image: yup.string().required('Image is required'),
    category: yup.string().required('Category is required'),
    tags: yup.string().required('Tags is required'),
  }),
})

export const getBlogValidation = yup.object({
  query: yup.object({
    id: yup.string().required('Id is required'),
  }),
})

export const updateBlogValidation = yup.object({
  body: yup.object({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.'),
    image: yup.string().required('Image is required'),
    category: yup.string().required('Category is required'),
    tags: yup.string().required('Tags is required'),
  }),
  query: yup.object({
    id: yup.string().required('Id is required'),
  }),
})

export const deleteBlogValidation = yup.object({
  query: yup.object({
    id: yup.string().required('Id is required'),
  }),
})

export type createBlogType = yup.TypeOf<
  typeof createBlogValidation.fields['body']
>
export type getBlogType = yup.TypeOf<typeof getBlogValidation.fields['query']>
export type deleteBlogType = yup.TypeOf<
  typeof deleteBlogValidation.fields['query']
>
export type updateBlogType = yup.TypeOf<
  typeof updateBlogValidation.fields['body']
>

/**
 * .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size <= 860321;
      })
      .test("type", "Only the following formats are accepted: .jpeg, .jpg, .png", (value) => {
        return value && (
          value[0].type === "image/jpeg" ||
          value[0].type === "image/png" ||
          value[0].type === "image/png"
        );
      })
 */
