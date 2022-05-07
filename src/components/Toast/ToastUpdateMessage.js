import React from 'react'
import styles from './ToastUpdateMessage.module.scss'

export default function ToastUpdateMessage() {
  return (
    <div className={styles.messageBox}>
      <span>리스트가 수정 되었습니다.</span>
    </div>
  )
}
