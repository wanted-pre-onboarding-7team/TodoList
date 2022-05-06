import { useState, useEffect, useCallback } from 'react'
import styles from './TodoCheck.module.scss'
import { CheckIcon } from '../../assets/svgs'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import cx from 'classnames'

function TodoListCheck() {
  // const [todoList, setTodoList] = useState(INIT_TODO)
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget
    const { id } = dataset

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === Number(id))

      const newList = [
        ...prev.slice(0, targetIndex),
        {
          id: prev[targetIndex].id,
          title: prev[targetIndex].title,
          done: checked,
        },
        ...prev.slice(targetIndex + 1),
      ]

      console.log('newList:', newList)
      console.log(checked)

      return newList
    })
  }

  return (
    <div className={styles.todoList}>
      {todoList.map((todo) => (
        <li key={`todo-${todo.id}`} className={styles.task}>
          <div className={styles.checkboxWrapper}>
            <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
            <CheckIcon />
          </div>
          <p className={cx(styles.title, { [styles.show]: todo.done })}>{todo.title}</p>
        </li>
      ))}
    </div>
  )
}

export default TodoListCheck
