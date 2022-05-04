import styles from './Routes.module.scss'
import TodoList from './TodoList'
import { RecoilRoot } from 'recoil'
import AddModal from '../components/AddTodo/AddModal'

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <TodoList />
        <AddModal />
      </div>
    </RecoilRoot>
  )
}

export default App
