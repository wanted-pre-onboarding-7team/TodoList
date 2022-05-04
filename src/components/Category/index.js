import React from 'react'
import styles from './Category.module.scss'

function Category() {
  return (
    <div className={styles.category}>
      <p className={styles.totalTasks}>40 tasks</p>
      <p className={styles.title}>Business</p>
      <div className={styles.range} />
    </div>
  )
}

export default Category
