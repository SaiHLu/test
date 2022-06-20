import {
  Box,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  HStack,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import NextLink from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from 'utils/cookie'

export interface ICategory {
  _id: string
  name: string
}

function CategoryIndex({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const currentPage = Number(router.query.page as unknown as number) || 1

  const onPageChanged = (e: any) => {
    const { target } = e
    const operation = target.getAttribute('data-nav-operation')
    const offset = operation === 'next' ? 1 : -1
    const page = currentPage + offset
    router.push(`/d/category?page=${page}`)
  }

  const handleDeleteCategory = async (id: string) => {
    const confirmation = confirm('Are you sure?')

    if (confirmation) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/category/${id}/delete`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const result = await response.json()

        if (result) router.push('/d/category')
      } catch (error) {
        console.log('Index category Page Delete Error: ', error)
        throw error
      }
    }
  }

  return (
    <Box width="full">
      <Box display="flex" justifyContent="flex-start" mb="8" pl="4">
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => router.push('/d/category/create')}
        >
          Create
        </Button>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((category: ICategory) => (
              <Tr key={category._id}>
                <Td>{category.name}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FaCaretDown />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <NextLink href={`/d/category/${category._id}`}>
                        <MenuItem>Edit</MenuItem>
                      </NextLink>
                      <MenuItem
                        onClick={() => handleDeleteCategory(category._id)}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack p="4">
        <Button
          onClick={onPageChanged}
          disabled={currentPage == 1}
          data-nav-operation="previous"
        >
          Prev
        </Button>
        <Box flex="1">
          <Center>
            <Text>Page - {currentPage}</Text>
          </Center>
        </Box>
        <Button
          onClick={onPageChanged}
          disabled={categories.length < 6}
          data-nav-operation="next"
        >
          Next
        </Button>
      </HStack>
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

  const page = (context.query.page as unknown as number) || 1
  const response = await fetch(
    `${process.env.API_URL}/api/category?page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const categories: ICategory[] = await response.json()

  return {
    props: {
      categories,
    },
  }
}

export default CategoryIndex
