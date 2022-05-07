import styles from './TodoListWrap.module.scss'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function TodoListWrap({ children }) {
  return <div className={styles.todoListWrap}>{children}</div>
}

TodoListWrap.propsTypes = {
  children: PropTypes.node.isRequired,
}

export default TodoListWrap
