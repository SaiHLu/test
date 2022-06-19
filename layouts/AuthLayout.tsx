import SidebarWithHeader from 'components/dashboard/Sidebar';
import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {

  return (
    <SidebarWithHeader>
      {children}

    </SidebarWithHeader>

  )
}
export default AuthLayout;