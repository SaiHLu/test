import { FlexProps, Flex, Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface NavItemProps extends FlexProps {
  icon: IconType
  to: string
  children: React.ReactNode
}

export const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  const router = useRouter()

  return (
    <Link
      as={NextLink}
      href={to}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        bgColor={router.pathname == to ? 'cyan.600' : ''}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}
