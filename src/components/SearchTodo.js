import { useState } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { SearchIcon } from '../assets/svgs'
import { todoListState } from '../atom/Todolist'

import styles from './SearchTodo.module.scss'

function SearchTodo() {
  const [isSearchOpened, setIsSearchOpen] = useState(false)
  const [serachWord, setSearchWord] = useState('')

  const setTodoList = useSetRecoilState(todoListState)
  const resetTodoList = useResetRecoilState(todoListState)

  const ToggleSearchBarHandler = () => {
    setIsSearchOpen((current) => !current)
  }

  const filteringTodoList = (value) => {
    resetTodoList()
    setTodoList((current) =>
      current.filter((todo) => {
        return todo.title.includes(value)
      })
    )
  }

  const searchInputChangeHandler = (e) => {
    const inputValue = e.target.value

    setSearchWord(inputValue)
    filteringTodoList(inputValue)
  }

  return (
    <div className={styles.searchTodo}>
      <div className={styles.searchBarWrapper}>
        <input
          className={`${styles.searchBar} ${isSearchOpened ? styles.unfolded : styles.folded}`}
          value={serachWord}
          onChange={searchInputChangeHandler}
        />
      </div>
      <button type='button' onClick={ToggleSearchBarHandler}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchTodo
