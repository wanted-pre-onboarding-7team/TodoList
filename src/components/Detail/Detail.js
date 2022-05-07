import styles from './Detail.module.scss'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import { CalendarIcon, EditIcon, DeleteIcon } from '../../assets/svgs'
import React, { useState } from 'react'
import DetailBubble from './DetailBubble'

export default function Detail(props: any) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const { item, handleCloseModal, handleTodoDelete, handleTodoEdit } = props
  const [inputValue, setInputValue] = useState(item.title)

  const updateValue = (e) => {
    setInputValue(e.target.value)
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
