import React from 'react'
import styles from './SideBar.module.scss'
import { useRecoilState } from 'recoil'
import { openSidebar } from '../../atom/Todolist'
import SideBarBg from './SideBarBg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  const [openSide, setOpenSide] = useRecoilState(openSidebar)

  return (
    <div className={`${styles.sideBarWrap}`}>
      <SideBarBg openSide={openSide} />
      <div className={styles.sideBar}>
        <button
          type='button'
          className={styles.sideClose}
          onClick={() => {
            setOpenSide(!openSide)
          }}
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
        <div className={`${styles.c100}`}>
          <span>90%</span>
          {/* 원 그려주려고 했는데 리액트는 태그안에 빈값이 있으면 안됨 */}
          <div className={styles.slice}>
            <div className={styles.bar} />
            <div className={styles.fill} />
          </div>
        </div>
        <h2 className={styles.userName}>7팀</h2>
      </div>
    </div>
  )
}

export default SideBar
