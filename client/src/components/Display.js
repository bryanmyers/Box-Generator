import React from 'react'

import styles from '../static/Display.module.css'

const Display = (props) => {

  const {colors} = props

  // console.log(colors)

  const colorList = colors.map(color => <div className={styles.colorBox} style={{backgroundColor: color}} key={color}></div>)

  return (
    <div className={styles.container}>
      <h2>Your Choices:</h2>
      <div className={styles.boxes}>
        {colorList}
      </div>
    </div>
  )
}

export default Display