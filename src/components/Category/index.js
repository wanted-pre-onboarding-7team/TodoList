import { useMemo } from 'react'
import styles from './Category.module.scss'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import PropTypes from 'prop-types'
import { makeColorWidthText, filterTodoList, checkFilteredTodoList } from '../../utils'

function Category({ categoryType, categoryColor, onClick }) {
  const todolist = useRecoilValue(todoListState)

  const filteredTodoList = useMemo(() => {
    return filterTodoList(categoryType, todolist)
  }, [categoryType, todolist])

  const donefilteredTodoListLength = useMemo(() => {
    return checkFilteredTodoList(filteredTodoList)
  }, [filteredTodoList])

  const backgroundColorText = useMemo(() => {
    return makeColorWidthText(filteredTodoList.length, donefilteredTodoListLength)
  }, [donefilteredTodoListLength, filteredTodoList])

  return (
    <button type='button' className={styles.category} data-title={categoryType} onClick={onClick}>
      <p className={styles.totalTasks}>{filteredTodoList.length} tasks</p>
      <p className={styles.title}>{categoryType}</p>
      <div className={styles.rangeWrapper}>
        <div className={styles.range} style={{ '--percent': `${backgroundColorText}%`, '--color': categoryColor }} />
      </div>
    </button>
  )
}

Category.propTypes = {
  categoryType: PropTypes.string,
  categoryColor: PropTypes.string,
  onClick: PropTypes.func,
}

Category.defaultProps = {
  categoryType: 'all',
  categoryColor: '#af52de',
}

export default Category
