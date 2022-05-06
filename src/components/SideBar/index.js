import React from 'react'
import styles from './SideBar.module.scss'

function SideBar() {
  return (
    <div className={styles.sideBarWrap}>
      <div className={styles.sideBar}>
        <button type='button' className={styles.sideClose}>
          닫기
        </button>
        <div className={`${styles.c100} ${styles.blue}`}>
          <span>90%</span>
          {/* 원 그려주려고 했는데 리액트는 태그안에 빈값이 있으면 안됨 */}
          <div className={styles.slice}>
            <div className={styles.bar} />
            <div className={styles.fill} />
          </div>
        </div>
        <h2 className={styles.userName}>남효현</h2>
      </div>
    </div>
  )
}

export default SideBar
