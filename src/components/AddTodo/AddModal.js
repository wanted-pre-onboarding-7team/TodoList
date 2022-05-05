import { useState } from 'react'
import useTodoList from '../../hooks/useTodoList'

import styles from './AddModal.module.scss'
import { CalendarIcon, AddIcon, FlagIcon, MoonIcon } from '../../assets/svgs'

function AddModal() {
  const [inputValue, setInputValue] = useState('')
  const { addTodoList } = useTodoList()
  const handleClose = () => {}

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const handleAddBtnClick = () => {
    if (!inputValue) return
    // alert eslint에서 눈에 안띈다고 커스텀 alert 사용권장
    addTodoList(inputValue)
    setInputValue('')
  }

  return (
    <div className={styles.addModal}>
      <button type='button' className={styles.closeBtn} onClick={handleClose} aria-label='Close button' />
      <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Enter new task' />
      <div className={styles.optionWrapper}>
        <button type='button' className={styles.calendarBtn} aria-label='Calendar button'>
          <CalendarIcon />
          <p>Today</p>
        </button>
        <button type='button' className={styles.categoryBtn} aria-label='Category button' />
      </div>
      <div className={styles.IconWrapper}>
        <AddIcon />
        <FlagIcon />
        <MoonIcon />
      </div>
      <button type='button' onClick={handleAddBtnClick} className={styles.addBtn} aria-label='Add button' />
    </div>
  )
}

export default AddModal
