import React from 'react'
import styles from './TextCard.module.css'

function TextCard(props) {
  return (
    <div className={styles.container}>
      
      <div className={styles.heading}>
        {props.heading}
      </div>
      
      <div className={styles.content}>
        {props.content}
      </div>
    </div>
  )
}

export default TextCard