import { useState } from 'react'
import styles from './TodoList.module.scss'
import { CheckIcon } from '../../assets/svgs'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import DeleteAllModal from '../../components/DeleteAll'

// const INIT_TODO = [
//   {
//     id: 1,
//     title: '계란 2판 사기',
//     done: false,
//   },
//   {
//     id: 2,
//     title: '맥북 프로 M1 Max CTO 버전 사기',
//     done: false,
//   },
//   {
//     id: 3,
//     title: '오늘의 TIL 작성하기',
//     done: false,
//   },
// ]

function TodoList() {
  // const [todoList, setTodoList] = useState(INIT_TODO)
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const handleAddClick = () => {}

  const handleDeleteAllClick = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal)
  }

  const handleCloseModalFunction = (isCloseModal) => {
    // eslint-disable-next-line no-console
    //  console.log(isCloseModal)
    if (isCloseModal === true) {
      setIsOpenDeleteModal(false)
    }
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
          <div className={styles.tasksTopWrapper}>
            <p className={styles.tasksTitle}>Today&apos;s</p>
            <button
              type='button'
              className={styles.deleteButton}
              onClick={handleDeleteAllClick}
              aria-label='Delete All TodoList button'
            >
              Delete All
            </button>
          </div>
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
        <button
          type='button'
          className={styles.addButton}
          onClick={handleAddClick}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
          aria-label='Add button'
        />
      </div>
      {isOpenDeleteModal ? <DeleteAllModal handleCloseModalFunction={handleCloseModalFunction} /> : ''}
    </div>
  )
}

export default TodoList
