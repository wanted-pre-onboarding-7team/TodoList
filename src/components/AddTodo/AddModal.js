import styles from './AddModal.module.scss'

import { CalendarIcon, AddIcon, FlagIcon, MoonIcon } from '../../assets/svgs'

function AddModal() {
  const handleClose = (e) => {}
  const handleChange = (e) => {}

  return (
    <div className={styles.addModal}>
      <button type='button' className={styles.closeButton} onClick={handleClose} aria-label='Close button' />
      <input type='text' onChange={handleChange} placeholder='Enter new task' />
      <div className={styles.optionBox}>
        <div className={styles.dateBox}>
          <CalendarIcon />
          <p>Today</p>
        </div>
        <button type='button' className={styles.categoryButton} aria-label='Category button' />
      </div>
      <div className={styles.IconBox}>
        <AddIcon />
        <FlagIcon />
        <MoonIcon />
      </div>
      <button type='button' className={styles.addButton} aria-label='Add button' />
    </div>
  )
}

export default AddModal
