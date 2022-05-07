import styles from './Routes.module.scss'
import TodoList from './TodoList'
import { RecoilRoot } from 'recoil'
import TodoListWrap from '../components/TodoListWrap'
import SideBar from '../components/SideBar'

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <TodoListWrap>
          <TodoList />
          <SideBar />
        </TodoListWrap>
      </div>
    </RecoilRoot>
  )
}

export default App
