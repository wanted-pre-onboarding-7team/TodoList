import { useState, useEffect, useCallback } from 'react'
import styles from './TodoCheck.module.scss'
import { CheckIcon } from '../../assets/svgs'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atom/Todolist'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { CategoryType } from '../../atom/CategoryList'

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
