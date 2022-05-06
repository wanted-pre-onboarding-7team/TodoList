import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atom/Todolist'

import styles from './SearchTodo.module.scss'
import { SearchIcon } from '../assets/svgs'

function SearchTodo() {
  const [isSearchOpened, setIsSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const setTodoList = useSetRecoilState(todoListState)

  const toggleSearchBarHandler = () => {
    setIsSearchOpen((current) => !current)
  }

  const filteringTodoList = (inputValue) => {
    setTodoList((current) =>
      current.map((todo) => {
        return todo.title.includes(inputValue) ? { ...todo, hidden: false } : { ...todo, hidden: true }
      })
    )
  }

  const searchInputChangeHandler = (e) => {
    const inputValue = e.target.value

    setSearchInput(inputValue)
    filteringTodoList(inputValue)
  }

  return (
    <div className={styles.searchTodo}>
      <div className={styles.searchBarWrapper}>
        <input
          className={`${styles.searchBar} ${isSearchOpened ? styles.unfolded : styles.folded}`}
          value={searchInput}
          onChange={searchInputChangeHandler}
        />
      </div>
      <button type='button' onClick={toggleSearchBarHandler}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchTodo
