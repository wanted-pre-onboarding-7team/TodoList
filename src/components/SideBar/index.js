import styles from './SideBar.module.scss'
import { useRecoilState } from 'recoil'
import { openSidebar } from '../../atom/Todolist'
import SideBarBg from './SideBarBg'
import { ProFile, CloseIcon } from '../../assets/svgs'

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
          <CloseIcon fill='white' className={styles.closeIcon} />
        </button>
        <div className={styles.circularWrap}>
          <ProFile className={styles.circularProgressSvg} />
        </div>
        <h2 className={styles.userName}>7 Team</h2>
        <ul className={styles.sideList}>
          <li>dpfflsk45@gmail.com</li>
          <li>wkqkel@naver.com</li>
          <li>tosiltosilkk@gmail.com</li>
          <li>my__memoria@naver.com</li>
          <li>dkgueing@gmail.com</li>
          <li>yoojamer@gmail.com</li>
          <li>starberry970310@gmail.com</li>
          <li>skagygus8@gmail.com</li>
          <li>ejin1996@gmail.com</li>
          <li>rlaqudwls157@gmail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
