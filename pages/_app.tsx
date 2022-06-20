import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import AuthLayout from 'layouts/AuthLayout'
import GuestLayout from 'layouts/GuestLayout'
import { SidebarContextProvider } from 'context/SidebarContext'
import HomeLayout from 'layouts/HomeLayout'
import BlogLayout from 'layouts/BlogLayout'

import 'styles/globals.css'

type NextPageWithLayout = NextPage & {
  guestLayout: boolean;
  homeLayout: boolean;
  blogLayout: boolean;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.homeLayout) return (<HomeLayout><Component {...pageProps} /></HomeLayout>)

  if (Component.blogLayout) return (<BlogLayout>
    <Component {...pageProps} />
  </BlogLayout>)

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
