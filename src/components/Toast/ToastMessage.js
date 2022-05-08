import styles from './ToastMessage.module.scss'

export default function ToastMessage(props: any) {
  const { message } = props

  return (
    <div className={styles.messageBox}>
      <span>리스트가 {message} 되었습니다.</span>
    </div>
  )
}
