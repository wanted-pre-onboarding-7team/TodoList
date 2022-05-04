import styles from './Routes.module.scss'
import TodoList from './TodoList'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

export default App
