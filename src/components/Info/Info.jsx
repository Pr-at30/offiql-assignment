import React from 'react'
import styles from './Info.module.css'
import TextCard from '../../utils/TextCard/TextCard'
import { ReactComponent as Info1 } from '../../assets/ai.svg'


export default function Info() {
  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <div className={styles.heading}>
          <span>AI </span>
          <span className={styles.highlight}>framework</span>
        </div>

        <div className={styles.text}>
          <TextCard className={styles.textcard} heading="Personalisation" content="The advanced intelligent system assists in reaching out to customers and increasing conversion funnel." />
  
          <TextCard className={styles.textcard} heading="Efficiency" content="Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions." />
  
          <TextCard className={styles.textcard} heading="Automation" content="Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl." />
        </div>
      </div>
      
      <div className={styles.right}>
        <Info1 className={styles.info}/>
      </div>
    
    </div>
  )
}
