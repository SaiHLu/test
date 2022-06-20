import React from 'react'
import { IconType } from 'react-icons'
import { FaEdit } from 'react-icons/fa'
import styles from './ServiceCard.module.css'

export interface IServiceCardProps {
  Icon: IconType
  text: string
}

const ServiceCard: React.FC<IServiceCardProps> = ({ Icon, text }) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.icon_size} />
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard
