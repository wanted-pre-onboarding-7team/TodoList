import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'
import uuid from 'react-uuid'

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [isOpenModal, setIsOpenModal] = useState()
  const [showUpdateMsg, setShowUpdateMsg] = useState(false)
  const [showDeleteMsg, setShowDeleteMsg] = useState(false)

  const timer = () => {
    setTimeout(() => {
      setShowUpdateMsg(false)
      setShowDeleteMsg(false)
    }, 4000)
  }

  const addTodoList = (inputValue, categoryPick) => {
    const newValue = {
      id: uuid(),
      title: inputValue,
      done: false,
      category: categoryPick,
      hidden: false,
    }
    const newTodoList = todoList.concat(newValue)
    setTodoList(newTodoList)
    localStorage.setItem('todoList', JSON.stringify(newTodoList))
  }

  const handleOpenModal = (id, title) => {
    setIsOpenModal({ id, title })
  }

  const handleCloseModal = () => {
    setIsOpenModal('')
  }

  const handleTodoDelete = ({ id }) => {
    setTodoList(todoList.filter((el) => el.id !== id))
    localStorage.removeItem(id)
    setShowDeleteMsg(true)
    handleCloseModal()
    timer()
  }

  const handleTodoEdit = (item, inputValue) => {
    const { id } = item
    const elem = JSON.parse(JSON.stringify(todoList))
    const update = elem.map((el) => (el.id === id ? { ...el, title: inputValue } : el))

    if (inputValue.length <= 0) {
      alert('빈 값은 입력할 수 없습니다.')
    } else {
      setTodoList(update)
      localStorage.setItem('todoList', JSON.stringify(update))

      handleCloseModal()
    }
    setShowUpdateMsg(true)
    timer()
  }

  return {
    addTodoList,
    handleOpenModal,
    handleCloseModal,
    handleTodoDelete,
    handleTodoEdit,
    isOpenModal,
    showUpdateMsg,
    showDeleteMsg,
  }
}

export default useTodoList
