import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack, Box, Select, Textarea } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import PageBreadcrumb from 'components/dashboard/PageBreadcrumb';
import { verify } from 'jsonwebtoken';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { IBlog } from 'pages/d';
import { ICategory } from 'pages/d/category';
import React from 'react';
import { useForm } from 'react-hook-form';
import { JWT_SECRET } from 'utils/cookie';
import { updateBlogValidation } from 'validations/blogValidations';

interface IFormInputs {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string;
}

const EditBlog = ({ categories, blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<IFormInputs>({
    resolver: yupResolver(updateBlogValidation.fields['body']),
    defaultValues: {
      ...blog,
      category: blog?.category?._id
    }
  })
  const router = useRouter()

  const handleUpdateBlog = async (data: IFormInputs) => {
    try {
      const response = await fetch(`/api/blog/${blog._id}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result) router.push('/d')
    } catch (error) {
      console.log('Login Page Error: ', error)
      throw error
    }
  }

  return (
    <Box width='full'>
      <Box display='flex' justifyContent='flex-end' mb='8'>
        <PageBreadcrumb name={['Blogs', 'Edit']} />
      </Box>

      <form onSubmit={handleSubmit(handleUpdateBlog)}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.title} isRequired>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input type='text' id='title' {...register('title')} />
            <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description} isRequired>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea id='description' {...register('description')}></Textarea>
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.image} isRequired>
            <FormLabel htmlFor='image'>Image</FormLabel>
            <Input type='text' id='image' {...register('image')} />
            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.category} isRequired>
            <FormLabel htmlFor='category'>Category</FormLabel>
            <Select placeholder='Select category' {...register('category')}>
              {categories.map((category: ICategory) => (
                <option value={category._id} key={category._id}>{category.name}</option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.tags} isRequired>
            <FormLabel htmlFor='tags'>Tags</FormLabel>
            <Input type='text' id='tags' {...register('tags')} placeholder="Separated by comma" />
            <FormErrorMessage>{errors.tags && errors.tags.message}</FormErrorMessage>
          </FormControl>

          <Button type='submit' w='full' colorScheme='blue' isLoading={isSubmitting}>Submit</Button>
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
        permanent: false
      }
    }
  }

  if (myJwt) {
    try {
      verify(myJwt, JWT_SECRET)
    } catch (error) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false
        }
      }
    }
  }

  const id = context.query.id as string
  const blogResponse = await fetch(`${process.env.API_URL}/api/blog/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const blog: IBlog = await blogResponse.json()

  const categoryResponse = await fetch(`${process.env.API_URL}/api/category/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const categories: ICategory[] = await categoryResponse.json()

  return {
    props: {
      categories,
      blog
    }
  }
}


export default EditBlog;