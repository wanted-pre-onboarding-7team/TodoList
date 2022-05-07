import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'

import styles from './SearchTodo.module.scss'
import { SearchIcon } from '../../assets/svgs'

function SearchTodo() {
  const [isSearchOpened, setIsSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const setTodoList = useSetRecoilState(todoListState)

  const toggleSearchBarHandler = () => {
    setIsSearchOpen((current) => !current)
  }

  const filteringTodoList = (value) => {
    setTodoList((current) =>
      current.map((todo) => {
        const convertedInput = value.toLowerCase()
        const isTodoIncludeInput = todo.title.toLowerCase().includes(convertedInput)
        return isTodoIncludeInput ? { ...todo, hidden: false } : { ...todo, hidden: true }
      })
    )
  }

  const searchInputChangeHandler = (e) => {
    const inputValue = e.target.value

    setSearchInput(inputValue)
    filteringTodoList(inputValue)
  }

  const inputKeyHandler = (e) => {
    if (e.key === 'Enter') {
      setIsSearchOpen(false)
    } else if (e.key === 'Escape') {
      setSearchInput('')
      filteringTodoList('')
    }
  }

  return (
    <div className={styles.searchTodo}>
      <div className={styles.searchBarWrapper}>
        <input
          className={`${styles.searchBar} ${isSearchOpened ? styles.unfolded : styles.folded}`}
          value={searchInput}
          onChange={searchInputChangeHandler}
          onKeyDown={inputKeyHandler}
        />
      </div>
      <button type='button' onClick={toggleSearchBarHandler}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchTodo
