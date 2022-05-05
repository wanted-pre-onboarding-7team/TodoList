import { useMemo } from 'react'
import styles from './Category.module.scss'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import PropTypes, { func } from 'prop-types'

function makeGradientColorText(color, total, done) {
  const colorPersent = isNaN((done / total) * 100) ? 0 : (done / total) * 100
  const result = `linear-gradient(to right, ${color} 0%, ${color} ${colorPersent}%, #aaaaaa ${colorPersent}%, #aaaaaa 100%)`
  return result
}

function makeUpperCaseFristChar(text){
  return text.replace(/\b[a-z]/, letter => letter.toUpperCase())
}

function Category({ categoryType, categoryColor }) {
  const todolist = useRecoilValue(todoListState)

  const filteredTodoList = useMemo(() => {
    const result = categoryType === 'all' ? todolist : todolist.filter((item) => item.category === categoryType)
    return result
  }, [categoryType, todolist])

  const donefilteredTodoListLength = useMemo(() => {
    return filteredTodoList.filter((item) => item.done === true).length
  }, [filteredTodoList])

  const backgroundGradientText = useMemo(() => {
    return makeGradientColorText(categoryColor, filteredTodoList.length, donefilteredTodoListLength)
  }, [donefilteredTodoListLength, filteredTodoList, categoryColor])
  return (
    <div className={styles.category}>
      <p className={styles.totalTasks}>{filteredTodoList.length} stasks</p>
      <p className={styles.title}>{makeUpperCaseFristChar(categoryType)}</p>
      <div className={styles.range} style={{ background: backgroundGradientText }} />
    </div>
  )
}

Category.propTypes = {
  categoryType: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
}

export default Category
