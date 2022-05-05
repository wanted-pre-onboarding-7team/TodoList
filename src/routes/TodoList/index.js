import { useState } from 'react'
import styles from './TodoList.module.scss'
import Category from '../../components/Category'
import { CheckIcon } from '../../assets/svgs'
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
  const setCategory = useSetRecoilState(todoListCategory)
  const filteredTodoList = useRecoilValue(filteredTodoListState)

  const handleAddClick = (e) => {
    // console.log('handleAddClick')
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
      // const newListTest = [...prev]

      // newListTest[targetIndex].done = checked

      // console.log("newListTest", newListTest)

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
    <div className={styles.todoList}>
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
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {filteredTodoList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}

export default TodoList
