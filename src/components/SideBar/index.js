import React from 'react'
import styles from './SideBar.module.scss'
import { useRecoilState } from 'recoil'
import { openSidebar } from '../../atom/Todolist'
import SideBarBg from './SideBarBg'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { ProFile } from '../../assets/svgs'

// import ProFile from '../../assets/images/profile.png'

function SideBar() {
  const [openSide, setOpenSide] = useRecoilState(openSidebar)

  const percentage = 66

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
          닫기
        </button>
        <div className={styles.circularWrap}>
          <CircularProgressbarWithChildren className={styles.circularProgressbar} value={percentage}>
            <ProFile className={styles.circularProgressSvg} />
          </CircularProgressbarWithChildren>
        </div>
        <h2 className={styles.userName}>
          7팀
          <br />이 많으면 두줄이 될까말까
        </h2>
        <ul className={styles.sideList}>
          <li>Templates</li>
          <li>Categories</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
