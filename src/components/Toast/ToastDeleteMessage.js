import React from 'react'
import styles from './ToastDeleteMessage.module.scss'

export default function ToastDeleteMessage() {
  return (
    <div className={styles.messageBox}>
      <span>리스트가 삭제 되었습니다.</span>
    </div>
  )
}
