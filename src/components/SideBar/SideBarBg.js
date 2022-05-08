import styles from './SideBarBg.module.scss'
import PropTypes from 'prop-types'

function SideBarBg({ openSide }) {
  return <div className={`${styles.circleButton} ${openSide ? styles.circleScaleUp : styles.circleScaleDown}`} />
}

SideBarBg.propTypes = {
  openSide: PropTypes.bool.isRequired,
}

export default SideBarBg
