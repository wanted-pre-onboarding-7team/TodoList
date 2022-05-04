import { useRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const handleAddTest = (e) => {
    const newValue = {
      id: 4,
      title: '테스트입니다',
      done: false,
    }

    setTodoList(todoList.concat(newValue))
  }

  return { handleAddTest }
}

export default useTodoList
