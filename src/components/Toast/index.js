import styles from './ToastMessage.module.scss'
import PropTypes from 'prop-types'

function ToastMessage({ message }) {
  return (
    <div className={styles.messageBox}>
      <span>리스트가 {message} 되었습니다.</span>
    </div>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ToastMessage
