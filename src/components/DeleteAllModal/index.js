import styles from './DeleteAllModal.module.scss'
import PropTypes from 'prop-types'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'

function DeleteAllModal({ setIsDeleteModalOpen }) {
  const setTodoList = useSetRecoilState(todoListState)

  const handleCloseButtonClick = () => {
    setIsDeleteModalOpen(false)
  }

  const handleDeleteButtonClick = () => {
    setTodoList([])
    localStorage.clear()
    setIsDeleteModalOpen(false)
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

DeleteAllModal.propTypes = {
  setIsDeleteModalOpen: PropTypes.func,
}

export default DeleteAllModal
