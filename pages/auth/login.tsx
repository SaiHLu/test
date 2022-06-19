import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginValidation } from 'validations/authValidations';

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<IFormInputs>({
    resolver: yupResolver(loginValidation)
  })
  const router = useRouter()

  const handleLogin = async (data: IFormInputs) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result) router.push('/d/category')
    } catch (error) {
      console.log('Login Page Error: ', error)
      throw error
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} style={{ width: '50%' }}>
      <VStack spacing={4}>
        <Heading as='h2' mb={2}>Login to start your session.</Heading>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel htmlFor='email'>Email Address</FormLabel>
          <Input type='email' id='email' {...register('email')} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input type='password' id='password' {...register('password')} />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>

        <Button type='submit' w='full' colorScheme='blue' isLoading={isSubmitting}>Login</Button>
      </VStack>
    </form>
  )
}

Login.guestLayout = true;

export default Login;