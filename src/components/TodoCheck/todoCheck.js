import styles from './TodoCheck.module.scss'
import { CheckIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'

function TodoCheck({ todo, onChange }) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type='checkbox'
        className={todo.category === 'business' ? styles.business : styles.personal}
        checked={todo.done}
        onChange={onChange}
        data-id={todo.id}
      />
      <CheckIcon />
    </div>
  )
}

export default TodoCheck

TodoCheck.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  onChange: PropTypes.func,
}
// TodoCheck.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     done: PropTypes.bool,
//     category: PropTypes.string,
//   }),
//   onChange: PropTypes.func,
// }
