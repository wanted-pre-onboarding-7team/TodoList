import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'

const useDragDrop = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [grab, setGrab] = useState(null)

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDragStart = (e) => {
    setGrab(e.currentTarget)
    e.currentTarget.classList.add('grabbing')
    e.currentTarget.style.opacity = 0.5
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.currentTarget)
  }

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('grabbing')
    e.currentTarget.style.opacity = ''
    e.dataTransfer.dropEffect = 'move'
    setGrab(null)
  }

  const handleOnDrop = (e) => {
    const grabPosition = Number(grab.dataset.position)
    const targetPosition = Number(e.currentTarget.dataset.position)
    const list = [...todoList]
    list[grabPosition] = list.splice(targetPosition, 1, list[grabPosition])[0]
    setTodoList(list)
  }
  return { handleDragStart, handleDragEnd, handleDragOver, handleOnDrop, grab }
}

export default useDragDrop
