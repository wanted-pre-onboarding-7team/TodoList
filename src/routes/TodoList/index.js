import { useEffect, useState } from 'react'
import styles from './TodoList.module.scss'
import Category from '../../components/Category'
import AddModal from '../../components/AddTodo/AddModal'
import SearchTodo from '../../components/SearchTodo/SearchTodo'
import Detail from '../../components/Detail/Detail'
import DeleteAllModal from '../../components/DeleteAll'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredTodoListState, todoListCategory, todoListState, openSidebar } from '../../atom/Todolist'
import { CategoryType } from '../../atom/CategoryList'
import useDragDrop from '../../hooks/useDragDrop'
import useTodoList from '../../hooks/useTodoList'
import ToastMessage from '../../components/Toast/ToastMessage'
import cx from 'classnames'
import TodoCheck from '../../components/TodoCheck/todoCheck'
import { SideMenuIcon } from '../../assets/svgs'

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openSide, setOpenSide] = useRecoilState(openSidebar)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const setCategory = useSetRecoilState(todoListCategory)
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  const { handleDragStart, handleDragOver, handleDragEnd, handleOnDrop, grab } = useDragDrop()
  const {
    handleOpenModal,
    handleCloseModal,
    handleTodoDelete,
    handleTodoEdit,
    isOpenModal,
    showUpdateMsg,
    showDeleteMsg,
  } = useTodoList()
  const inputCheked = todoList && todoList.find((item) => item.done)

  useEffect(() => {
    const todolist = localStorage.getItem('todoList')
    if (todolist) setTodoList(JSON.parse(localStorage.getItem('todoList')))
  }, [setTodoList])

  const handleAddClick = () => {
    setOpenAddModal(true)
  }

  const handleDeleteAllClick = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal)
  }

  const handleCloseModalFunction = (isCloseModal) => {
    if (isCloseModal === true) {
      setIsOpenDeleteModal(false)
    }
  }

  const handleCategoryClick = (e) => {
    const { title } = e.currentTarget.dataset

    setCategory(() => title)
  }

  useEffect(() => {
    localStorage.removeItem(todoList)
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [inputCheked, todoList])

  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget
    const { id } = dataset
    localStorage.removeItem(todoList)
    localStorage.setItem('todoList', JSON.stringify(todoList))

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id)
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

      return newList
    })
  }

  return (
    <div className={`${styles.todoList} ${openSide && styles.sideOpen}`}>
      <div className={styles.centering}>
        <button
          type='button'
          className={styles.openSideBtn}
          onClick={() => {
            setOpenSide(!openSide)
          }}
        >
          <SideMenuIcon className={styles.openSideBtnBg} />
        </button>
        <SearchTodo />
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
        <ul className={styles.todoListScroll}>
          {filteredTodoList.map((todo, index) => (
            <li
              key={`todo-${todo.id}`}
              data-position={index}
              className={`${styles.task} ${todo.hidden ? styles.hidden : ''} ${
                grab && Number(grab.dataset.position) === index && styles.grabbing
              }`}
              draggable='true'
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              onDrop={handleOnDrop}
            >
              <TodoCheck onChange={handleChange} todo={todo} />
              <button type='button' onClick={() => handleOpenModal(todo.id, todo.title)}>
                <p className={cx(styles.title, { [styles.show]: todo.done })}>{todo.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} aria-label='Add button' onClick={handleAddClick} />
      </div>
      {openAddModal && <AddModal setOpenAddModal={setOpenAddModal} />}
      {isOpenModal && (
        <Detail
          item={isOpenModal}
          handleCloseModal={handleCloseModal}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      )}
      {isOpenDeleteModal ? <DeleteAllModal handleCloseModalFunction={handleCloseModalFunction} /> : ''}
      {showUpdateMsg && <ToastMessage message='수정' />}
      {showDeleteMsg && <ToastMessage message='삭제' />}
    </div>
  )
}

export default TodoList
