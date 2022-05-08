import styles from './TodoListWrap.module.scss'
import PropTypes from 'prop-types'

function TodoListWrap({ children }) {
  return <div className={styles.todoListWrap}>{children}</div>
}

TodoListWrap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TodoListWrap
