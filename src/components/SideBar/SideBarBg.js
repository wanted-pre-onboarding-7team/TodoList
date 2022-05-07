import styles from './SideBarBg.module.scss'

// eslint-disable-next-line react/prop-types
function SideBarBg({ openSide }) {
  return <div className={`${styles.circle_button} ${openSide ? styles.circle_scale_up : styles.circle_scale_down}`} />
}

export default SideBarBg
