import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import PageBreadcrumb from 'components/dashboard/PageBreadcrumb'
import { verify } from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { JWT_SECRET } from 'utils/cookie'
import {
  createCategoryValidation,
  createCategoryType,
} from 'validations/categoryValidations'

const CreateCategory = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<createCategoryType>({
    resolver: yupResolver(createCategoryValidation.fields['body']),
  })
  const router = useRouter()

  const handleCreateCategory = async (data: createCategoryType) => {
    try {
      const response = await fetch('/api/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result) router.push('/d/category')
    } catch (error) {
      console.log('Create Category Page Error: ', error)
      throw error
    }
  }

  return (
    <Box width="full">
      <Box display="flex" justifyContent="flex-end" mb="8">
        <PageBreadcrumb name={['Category', 'Create']} />
      </Box>

      <form onSubmit={handleSubmit(handleCreateCategory)}>
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

  return {
    props: {},
  }
}

export default CreateCategory
