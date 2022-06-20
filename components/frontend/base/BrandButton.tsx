import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './BrandButton.module.css'

export interface IBrandButton {
  backgroundColor?: string
  fontColor?: string
  btnSize?: string
  children: React.ReactNode
}

const BrandButton: React.FC<IBrandButton> = ({
  backgroundColor,
  fontColor,
  btnSize,
  children,
  ...rest
}) => {
  return (
    <button
      className={styles.brand_button}
      style={{
        backgroundColor: backgroundColor ?? 'red',
        color: fontColor ?? '#fff',
        width: btnSize ?? '120px',
      }}
      {...rest}
    >
      <div className={styles.brand_button_content}>
        {children}
        <FaArrowRight style={{ marginLeft: '0.4rem' }} />
      </div>
    </button>
  )
}

export default BrandButton
