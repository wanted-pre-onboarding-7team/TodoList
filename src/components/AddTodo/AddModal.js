import { useState } from 'react'
import PropTypes from 'prop-types'
import useTodoList from '../../hooks/useTodoList'
import { CategoryList } from '../../atom/CategoryList'
import Swal from 'sweetalert2'
import ExpandBubble from './ExpandBubble'
import styles from './AddModal.module.scss'
import { CalendarIcon, AddIcon, FlagIcon, MoonIcon } from '../../assets/svgs'

function AddModal({ setOpenAddModal }) {
  const [inputValue, setInputValue] = useState('')
  const [categoryPick, setCategoryPick] = useState('')
  const [idx, incrementIndex] = useState(0)
  const [color, setColor] = useState('#dee3f9')
  const { addTodoList } = useTodoList()

  const checkEmptyInput = () => {
    if (!inputValue || !categoryPick) {
      Swal.fire({
        title: 'Error!',
        text: 'Please check value',
        icon: 'error',
      })
      return true
    }
    return false
  }

  const handleClose = () => {
    setOpenAddModal(false)
  }

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const handleAddBtnClick = () => {
    if (checkEmptyInput()) return
    addTodoList(inputValue, categoryPick)
    setOpenAddModal(false)
  }

  const handleChangeCategory = () => {
    if (idx >= CategoryList.length) {
      setCategoryPick(CategoryList[0].title)
      setColor(CategoryList[0].color)
      incrementIndex(1)
    } else {
      setCategoryPick(CategoryList[idx].title)
      setColor(CategoryList[idx].color)
      incrementIndex(idx + 1)
    }
  }

  return (
    <div className={styles.background}>
      <ExpandBubble />
      <div className={styles.addModal}>
        <button type='button' className={styles.closeBtn} onClick={handleClose} aria-label='Close button' />
        <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Enter new task' />
        <div className={styles.optionWrap}>
          <button type='button' className={styles.calendarBtn} aria-label='Calendar button'>
            <CalendarIcon />
            <p>Today</p>
          </button>
          <button
            type='button'
            onClick={handleChangeCategory}
            style={{ '--color': color }}
            className={styles.categoryBtn}
            aria-label='Category button'
          />
          <p className={styles.categoryTitle}>{categoryPick.toLocaleUpperCase()}</p>
        </div>
        <div className={styles.iconWrap}>
          <AddIcon />
          <FlagIcon />
          <MoonIcon />
        </div>
        <button type='button' onClick={handleAddBtnClick} className={styles.addBtn} aria-label='Add button' />
      </div>
    </div>
  )
}

AddModal.propTypes = {
  setOpenAddModal: PropTypes.func.isRequired,
}

export default AddModal
