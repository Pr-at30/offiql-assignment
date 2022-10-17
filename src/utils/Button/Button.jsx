import React from 'react'
import styles from './Button.module.css'

function button(props) {
  return (
    <button className={styles.button}>{props.text}</button>
  )
}

export default button