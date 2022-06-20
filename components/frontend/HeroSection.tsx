import React from 'react'
import { FaClock } from 'react-icons/fa'
import BrandButton from './base/BrandButton'
import ProductCard from './base/ProductCard'
import styles from './HeroSection.module.css'


const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_section}>
        <div className={styles.hero_text}>
          <p className={styles.hero_text_introduction}>
            <span className={styles.hero_text_kbz}>KBZ Money</span> compass anti money
          </p>
          <p className={styles.hero_text_introduction}>laundering technology and</p>
          <p className={styles.hero_text_introduction}>services redefined</p>

          <p className={styles.hero_text_short_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse, culpa enim libero velit modi ipsa a consequatur odit excepturi error doloribus, accusantium.</p>

          <BrandButton backgroundColor='red'>Get Started</BrandButton>
        </div>
        <div className={styles.hero_image_container}>
          <img src="/default.png" alt="Default Image" className={styles.hero_image} />
        </div>
      </div>

      <div className={styles.product_list_section}>
        <div className={styles.product_list}>
          <ProductCard icon={<FaClock size={28} />} title="Test" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi voluptate rem necessitatibus eum voluptates nostrum recusandae, molestias fuga non accusamus, magnam doloribus laborum ea dolorem aliquam ipsum illo laudantium! world" backgroundColor="blue" />

          <ProductCard icon={<FaClock size={28} />} title="Test" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi voluptate rem necessitatibus eum voluptates nostrum recusandae, molestias fuga non accusamus, magnam doloribus laborum ea dolorem aliquam ipsum illo laudantium! world" backgroundColor="white" fontColor='#000' />

          <ProductCard icon={<FaClock size={28} />} title="Test" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi voluptate rem necessitatibus eum voluptates nostrum recusandae, molestias fuga non accusamus, magnam doloribus laborum ea dolorem aliquam ipsum illo laudantium! world" backgroundColor="white" fontColor='#000' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection