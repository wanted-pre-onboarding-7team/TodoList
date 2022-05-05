import { useEffect, useMemo } from 'react'
import styles from './Category.module.scss'
import { useRecoilValue, useRecoilCallback } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import PropTypes from 'prop-types'

function makeGradientColorText(color, total, done) {
  const colorPersent = isNaN((done / total) * 100) ? 0 : (done / total) * 100
  const result = `linear-gradient(to right, ${color} 0%, ${color} ${colorPersent}%, #aaaaaa ${colorPersent}%, #aaaaaa 100%)`
  return result
}

function Category({ categoryType, categoryColor }) {
  const todolist = useRecoilValue(todoListState)

  const filterdTodoList = useMemo(() => {
    return todolist.filter((item) => item.category === categoryType)
  }, [categoryType, todolist])

  const donefilterdTodoListLength = useMemo(() => {
    return filterdTodoList.filter((item) => item.done === true).length
  }, [filterdTodoList])

  const backgroundGradientText = useMemo(() => {
    return makeGradientColorText(categoryColor, filterdTodoList.length, donefilterdTodoListLength)
  }, [donefilterdTodoListLength, filterdTodoList, categoryColor])
  return (
    <div className={styles.category}>
      <p className={styles.totalTasks}>{filterdTodoList.length} stasks</p>
      <p className={styles.title}>{categoryType}</p>
      <div className={styles.range} style={{ background: backgroundGradientText }} />
    </div>
  )
}

Category.propTypes = {
  categoryType: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
}

export default Category
