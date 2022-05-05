import { useState } from 'react'
import styles from './DeleteAllModal.module.scss'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
// import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function DeleteAllModal({ handleCloseModalFunction }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const [isCloseModal, setIsCloseModal] = useState(false)

  const handleCloseButtonClick = () => {
    setIsCloseModal(!isCloseModal)
    handleCloseModalFunction(true)
  }

  const handleDeleteButtonClick = () => {
    setTodoList([])
    handleCloseModalFunction(true)
  }

  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.modalView}>
        <button
          type='button'
          className={styles.closeButton}
          onClick={handleCloseButtonClick}
          aria-label='Modal Close button'
        >
          &times;
        </button>
        <p>
          Are you sure
          <br />
          you want to delete them all?
        </p>
        <button
          type='button'
          className={styles.deleteButton}
          onClick={handleDeleteButtonClick}
          aria-label='TodoList Delete All button'
        >
          DELETE
        </button>
      </div>
    </div>
  )
}

/*
DeleteAllModal.propsTypes = {
  handleCloseModalFunction: PropTypes.func,
}
*/

export default DeleteAllModal
