import React from 'react'
import {
  FaChalkboardTeacher,
  FaEdit,
  FaPeopleArrows,
  FaPeopleCarry,
  FaStarAndCrescent,
  FaThumbsUp,
} from 'react-icons/fa'
import ServiceCard from './base/ServiceCard'
import styles from './Service.module.css'

const Service = () => {
  return (
    <div className={styles.container}>
      <section className={styles.service_info}>
        <h3>Our Services</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione
          harum error ea sint saepe rerum doloribus, sunt reprehenderit dolor
          expedita laborum eveniet nulla voluptatum quaerat nemo neque commodi
          molestias?
        </p>
      </section>
      <section className={styles.service_section}>
        <ServiceCard Icon={FaPeopleArrows} text="Consulting" />
        <ServiceCard Icon={FaEdit} text="Licensing" />
        <ServiceCard Icon={FaChalkboardTeacher} text="Training" />
        <ServiceCard Icon={FaPeopleCarry} text="Correspondent Accountant" />
        <ServiceCard Icon={FaThumbsUp} text="Independent AML / BSA Reviews" />
        <ServiceCard Icon={FaStarAndCrescent} text="Look Back Reviews" />
      </section>
    </div>
  )
}

export default Service
