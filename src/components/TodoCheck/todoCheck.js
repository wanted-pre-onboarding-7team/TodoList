import styles from './TodoCheck.module.scss'
import { CheckIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'

function TodoCheck({ todo, checked, onChange }) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type='checkbox'
        className={todo.category === 'business' ? styles.business : styles.personal}
        checked={checked}
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
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}
