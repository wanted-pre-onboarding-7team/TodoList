import { useState } from 'react'
import styles from './TodoList.module.scss'
import { CheckIcon } from '../../assets/svgs'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import useTodoList from '../../hooks/useTodoList'

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const { handleAddTest } = useTodoList()
  // const handleAddClick = (e) => {
  //   console.log('handleAddClick')
  // }

  const [isAddModal, setIsAddModal] = useState(false)

  const handleAddModal = (e) => {
    setIsAddModal((prev) => !prev)
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

      console.log('newList:', newList)

      return newList
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {todoList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
