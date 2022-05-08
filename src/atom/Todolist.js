import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListCategory = atom({
  key: 'todoListCategory',
  default: 'all',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const category = get(todoListCategory)

    if (category === 'all') {
      return todoList
    }

    return todoList.filter((item) => item.category === category)
  },
})

export const openSidebar = atom({
  key: 'openSidebar',
  default: false,
})
