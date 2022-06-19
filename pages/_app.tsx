import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import AuthLayout from 'layouts/AuthLayout'
import GuestLayout from 'layouts/GuestLayout'
import { SidebarContextProvider } from 'context/SidebarContext'

type NextPageWithLayout = NextPage & {
  guestLayout: boolean;
  frontendLayout: boolean;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.frontendLayout && !Component.guestLayout) return (<Component {...pageProps} />)

  return (
    <ChakraProvider>
      {Component.guestLayout ?
        (<GuestLayout>
          <Component {...pageProps} />
        </GuestLayout>) :
        (
          <SidebarContextProvider>
            <AuthLayout>
              <Component {...pageProps} />
            </AuthLayout>
          </SidebarContextProvider>
        )}
    </ChakraProvider>
  )
}

export default MyApp
