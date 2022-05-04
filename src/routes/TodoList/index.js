import { useState } from 'react'
import styles from './TodoList.module.scss'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import { CheckIcon } from '../../assets/svgs'
import useDragDrop from '../../hooks/useDragDrop'

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const { handleDragStart, handleDragOver, handleDragEnd, handleOnDrop, grab } = useDragDrop()

  const handleAddClick = (e) => {
    // console.log('handleAddClick')
  }

  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget
    const { id } = dataset

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === Number(id))
      // const newListTest = [...prev]

      // newListTest[targetIndex].done = checked

      // console.log("newListTest", newListTest)
      const newList = [
        ...prev.slice(0, targetIndex),
        {
          id: prev[targetIndex].id,
          title: prev[targetIndex].title,
          done: checked,
        },
        ...prev.slice(targetIndex + 1),
      ]

      return newList
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {todoList.map((todo, index) => (
            <li
              key={`todo-${todo.id}`}
              data-position={index}
              className={styles.task}
              draggable='true'
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              onDrop={handleOnDrop}
            >
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}

export default TodoList
