import styles from './SideBar.module.scss'
import { useRecoilState } from 'recoil'
import { openSidebar } from '../../atom/Todolist'
import SideBarBg from './SideBarBg'
import { ProFile, CloseIcon } from '../../assets/svgs'
import { DEVELOPER } from '../../assets/data/developer'

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
          {DEVELOPER.map((user, index) => (
            <li key={`user-${index}`}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
