import { useState } from 'react'
import styles from './Detail.module.scss'
import PropTypes from 'prop-types'
import { CalendarIcon, EditIcon, DeleteIcon } from '../../assets/svgs'
import DetailBubble from './DetailBubble'

function Detail({ item, handleCloseModal, handleTodoDelete, handleTodoEdit }) {
  const [inputValue, setInputValue] = useState(item.title)

  const updateValue = (e) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className={styles.detailWrap}>
      <DetailBubble />
      <div className={styles.detail}>
        <button type='button' className={styles.closeButton} aria-label='Close button' onClick={handleCloseModal} />
        <input type='text' defaultValue={item.title || ''} className={styles.title} onChange={(e) => updateValue(e)} />
        <div className={styles.todayBtnWrap}>
          <button type='button' className={styles.todayButton}>
            <CalendarIcon />
            <p>Today</p>
          </button>
          <div className={styles.recordButton} />
        </div>
        <div className={styles.iconWrap}>
          <EditIcon onClick={() => handleTodoEdit(item, inputValue)} />
          <DeleteIcon onClick={() => handleTodoDelete(item)} />
        </div>
      </div>
    </div>
  )
}

Detail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
  handleCloseModal: PropTypes.func.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
  handleTodoDelete: PropTypes.func.isRequired,
}

export default Detail
