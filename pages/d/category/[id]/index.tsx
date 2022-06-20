import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Box,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import PageBreadcrumb from 'components/dashboard/PageBreadcrumb'
import { verify } from 'jsonwebtoken'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { JWT_SECRET } from 'utils/cookie'
import { updateCategoryValidation } from 'validations/categoryValidations'
import { ICategory } from '..'

interface IFormInputs {
  name: string
}

function EditCategory({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(updateCategoryValidation.fields['body']),
    defaultValues: {
      name: category.name,
    },
  })
  const router = useRouter()

  const handleUpdateCategory = async (data: IFormInputs) => {
    try {
      const response = await fetch(`/api/category/${category._id}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result) router.push('/d/category')
    } catch (error) {
      console.log('Edit Category Page Error: ', error)
      throw error
    }
  }

  return (
    <Box width="full">
      <Box display="flex" justifyContent="flex-end" mb="8">
        <PageBreadcrumb name={['Category', 'Edit']} />
      </Box>

      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.name} isRequired>
            <FormLabel htmlFor="name">Category Name</FormLabel>
            <Input type="text" id="name" {...register('name')} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            w="full"
            colorScheme="blue"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const myJwt = context.req.cookies.myJwt

  if (!myJwt) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  if (myJwt) {
    try {
      verify(myJwt, JWT_SECRET)
    } catch (error) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      }
    }
  }
  const id = context.params?.id
  const response = await fetch(`${process.env.API_URL}/api/category/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const category: ICategory = await response.json()

  return {
    props: {
      category,
    },
  }
}

export default EditCategory
