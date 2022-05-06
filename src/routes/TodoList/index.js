import { useState } from 'react'
import styles from './TodoList.module.scss'
import Category from '../../components/Category'
import { CheckIcon } from '../../assets/svgs'
import Detail from '../../components/Detail/Detail'
import DeleteAllModal from '../../components/DeleteAll'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredTodoListState, todoListCategory, todoListState } from '../../atom/Todolist'
import { CategoryType } from '../../atom/CategoryList'

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
  const [openSide, setOpenSide] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState()
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const setCategory = useSetRecoilState(todoListCategory)
  const filteredTodoList = useRecoilValue(filteredTodoListState)

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

  const handleCategoryClick = (e) => {
    const { title } = e.currentTarget.dataset

    setCategory(() => title)
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
          category: prev[targetIndex].category,
        },
        ...prev.slice(targetIndex + 1),
      ]

      console.log('newList:', newList)

      return newList
    })
  }

  return (
    <div className={`${styles.todoList} ${openSide && styles.sideOpen}`}>
      <button
        type='button'
        onClick={() => {
          setOpenSide(!openSide)
        }}
      >
        사이드버튼
      </button>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Categories</p>
        <div className={styles.categories}>
          <Category onClick={handleCategoryClick} />
          {CategoryType.map((item) => (
            <Category
              key={item.id}
              categoryType={item.title}
              categoryColor={item.color}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
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
          {filteredTodoList.map((todo) => (
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
      </div>
      <div>
        {isOpenModal && (
          <Detail
            item={isOpenModal}
            handleCloseModal={handleCloseModal}
            handleTodoDelete={handleTodoDelete}
            handleTodoEdit={handleTodoEdit}
          />
        )}
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>

      {isOpenDeleteModal ? <DeleteAllModal handleCloseModalFunction={handleCloseModalFunction} /> : ''}
    </div>
  )
}

export default TodoList
