import { Stack } from '@chakra-ui/react';
import React from 'react';

type GuestLayoutProps = {
  children: React.ReactNode
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {

  return (
    <Stack h='100vh' w='full' justify='center' align='center'>
      {children}
    </Stack>
  )
}
export default GuestLayout;