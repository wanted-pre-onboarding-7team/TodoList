import { useRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'
import { useState } from 'react'

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [isOpenModal, setIsOpenModal] = useState()

  const addTodoList = (inputValue, categoryPick) => {
    const newValue = {
      id: todoList.length + 1,
      title: inputValue,
      done: false,
      category: categoryPick,
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
    handleCloseModal()
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
  }

  return { addTodoList, handleOpenModal, handleCloseModal, handleTodoDelete, handleTodoEdit, isOpenModal }
}

export default useTodoList
