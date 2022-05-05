import { useState } from 'react'
import styles from './TodoList.module.scss'
import { CheckIcon } from '../../assets/svgs'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import Detail from '../../components/Detail/Detail'

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
  const [isOpenModal, setIsOpenModal] = useState()

  // 기능1. 모달 오픈
  const handleOpenModal = (id, title) => {
    setIsOpenModal({ id, title })
  }

  // 기능2. 모달 클로즈
  const handleCloseModal = () => {
    setIsOpenModal('')
  }

  // 기능3. 투두 삭제
  const handleTodoDelete = ({ id, title }) => {
    setTodoList(todoList.filter((el) => el.id !== id && el.title !== title))
    localStorage.removeItem(id)
    setIsOpenModal('')
  }

  // 기능4. 투두 수정
  const handleTodoEdit = (item, inputValue) => {
    const { id } = item
    const elem = JSON.parse(JSON.stringify(todoList))
    const update = elem.map((el) => (el.id === id ? { ...el, title: inputValue } : el))

    setTodoList(update)

    handleCloseModal()
  }

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
              <button type='button' onClick={() => handleOpenModal(todo.id, todo.title)}>
                <p className={styles.title}>{todo.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} aria-label='Add button' />
      </div>
      {isOpenModal && (
        <Detail
          item={isOpenModal}
          handleCloseModal={handleCloseModal}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      )}
    </div>
  )
}

export default TodoList
