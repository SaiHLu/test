import React from 'react'
import { IconType } from 'react-icons'
import { FaAccessibleIcon } from 'react-icons/fa'
import BrandButton from './BrandButton'

import styles from './ProductCard.module.css'

export interface IProductCardProps {
  icon: any
  title: string
  description: string
  backgroundColor: string
  fontColor?: string
}

const ProductCard: React.FC<IProductCardProps> = ({
  icon,
  title,
  description,
  backgroundColor,
  fontColor,
}) => {
  return (
    <div
      className={styles.product_card}
      style={{ backgroundColor, color: fontColor ?? '#fff' }}
    >
      {icon}
      <p className={styles.product_title}>{title}</p>
      <p className={styles.product_description}>
        {description.substring(0, 100)}...
      </p>
      <BrandButton backgroundColor="transparent" fontColor={fontColor}>
        Get Started
      </BrandButton>
    </div>
  )
}

export default ProductCard
