import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

interface PageBreadcrumbProps {
  name: string[];
}

const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ name }) => {
  return (
    <Breadcrumb>
      {
        name.map((n, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href='#'>{n}</BreadcrumbLink>
          </BreadcrumbItem>
        )
        )
      }
    </Breadcrumb>
  )
}

export default PageBreadcrumb