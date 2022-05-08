import styles from './SideBarBg.module.scss'

// eslint-disable-next-line react/prop-types
function SideBarBg({ openSide }) {
  return <div className={`${styles.circleButton} ${openSide ? styles.circleScaleUp : styles.circleScaleDown}`} />
}

export default SideBarBg
