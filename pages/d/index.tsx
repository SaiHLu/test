import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
  Center,
  Avatar,
  Tag,
} from '@chakra-ui/react'
import { FaCaretDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import { createBlogType } from 'validations/blogValidations'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from 'utils/cookie'
import { Verify } from 'crypto'

export interface IBlog extends Omit<createBlogType, 'category'> {
  _id: string
  category: { name?: string }
}

function BlogIndex({
  blogs,
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

  const handleDeleteBlog = async (id: string) => {
    const confirmation = confirm('Are you sure?')

    if (confirmation) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${id}/delete`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const result = await response.json()

        if (result) router.push('/d')
      } catch (error) {
        console.log('Index blog Page Delete Error: ', error)
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
          onClick={() => router.push('/d/blogs/create')}
        >
          Create
        </Button>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Image</Th>
              <Th>Tags</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog: IBlog) => (
              <Tr key={blog._id}>
                <Td>{blog.title}</Td>
                <Td>{blog.category?.name}</Td>
                <Td>
                  <Avatar name={blog.title} src={blog.image} />
                </Td>
                <Td>
                  {blog.tags?.split(',').map((tag, index) => (
                    <Tag variant="solid" ml="1" key={index}>
                      {tag}
                    </Tag>
                  ))}
                </Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FaCaretDown />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <NextLink href={`/d/blogs/${blog._id}`}>
                        <MenuItem>Edit</MenuItem>
                      </NextLink>
                      <MenuItem onClick={() => handleDeleteBlog(blog._id)}>
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
          disabled={blogs.length < 6}
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

  const response = await fetch(`${process.env.API_URL}/api/blog?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const blogs: IBlog[] = await response.json()

  return {
    props: {
      blogs,
    },
  }
}

export default BlogIndex
