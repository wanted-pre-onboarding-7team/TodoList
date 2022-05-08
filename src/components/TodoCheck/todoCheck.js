import styles from './TodoCheck.module.scss'
import PropTypes from 'prop-types'
import { CheckIcon } from '../../assets/svgs'

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

TodoCheck.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool,
    category: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

export default TodoCheck
