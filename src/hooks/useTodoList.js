import { useRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'
import uuid from 'react-uuid'

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const addTodoList = (inputValue, categoryPick) => {
    const newValue = {
      id: uuid(),
      title: inputValue,
      done: false,
      category: categoryPick,
    }
    const newTodoList = todoList.concat(newValue)
    setTodoList(newTodoList)
    localStorage.setItem('todoList', JSON.stringify(newTodoList))
  }
  return { addTodoList }
}

export default useTodoList
