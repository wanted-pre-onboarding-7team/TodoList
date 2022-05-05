import { useState } from 'react'
import PropTypes from 'prop-types'
import useTodoList from '../../hooks/useTodoList'

import ExpandBubble from './ExpandBubble'

import styles from './AddModal.module.scss'
import { CalendarIcon, AddIcon, FlagIcon, MoonIcon } from '../../assets/svgs'

function AddModal({ setOpenAddModal }) {
  const [inputValue, setInputValue] = useState('')
  const { addTodoList } = useTodoList()

  const handleClose = () => {
    setOpenAddModal(false)
  }

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const handleAddBtnClick = () => {
    if (!inputValue) return // alert eslint에서 눈에 안띈다고 커스텀 alert 사용권장
    addTodoList(inputValue)
    setInputValue('')
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
          <div className={styles.categoryWrap}>
            <button type='button' className={styles.categoryBtn} aria-label='Category button' />
          </div>
        </div>
        <div className={styles.IconWrap}>
          <AddIcon />
          <FlagIcon />
          <MoonIcon />
        </div>
        <button type='button' onClick={handleAddBtnClick} className={styles.addBtn} aria-label='Add button' />
      </div>
    </div>
  )
}

export default AddModal

AddModal.propTypes = {
  setOpenAddModal: PropTypes.func.isRequired,
}
