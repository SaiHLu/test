import * as yup from 'yup'

export const loginValidation = yup
  .object({
    email: yup.string().email().required('Email Address is required.'),
    password: yup
      .string()
      .max(100, 'Maximum characters are 100.')
      .required('Password is required.'),
  })
  .required()

export const registerValidation = yup.object({
  email: yup.string().email().required('Email Address is required.'),
  password: yup
    .string()
    .min(8, 'Minimun 8 characters.')
    .max(100, 'Maximum characters are 100.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password do not match.'),
})
