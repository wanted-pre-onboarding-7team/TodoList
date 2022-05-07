import { useMemo } from 'react'
import styles from './Category.module.scss'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import PropTypes from 'prop-types'

function makeColorWidthText(color, total, done) {
  const colorPersent = isNaN((done / total) * 100) ? 0 : (done / total) * 100
  return colorPersent
}


function Category({ categoryType, categoryColor, onClick }) {
  const todolist = useRecoilValue(todoListState)

  const filteredTodoList = useMemo(() => {
    const result = categoryType === 'all' ? todolist : todolist.filter((item) => item.category === categoryType)
    return result
  }, [categoryType, todolist])

  const donefilteredTodoListLength = useMemo(() => {
    return filteredTodoList.filter((item) => item.done === true).length
  }, [filteredTodoList])

  const backgroundGradientText = useMemo(() => {
    return makeColorWidthText(categoryColor, filteredTodoList.length, donefilteredTodoListLength)
  }, [donefilteredTodoListLength, filteredTodoList, categoryColor])

  return (
    <button type='button' className={styles.category} data-title={categoryType} onClick={onClick}>
      <p className={styles.totalTasks}>{filteredTodoList.length} tasks</p>
      <p className={styles.title}>{categoryType}</p>
      <div className={styles.rangeWrapper}>
        <div className={styles.range} style={{'--persent':`${backgroundGradientText}%`, '--color':categoryColor}} />
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
