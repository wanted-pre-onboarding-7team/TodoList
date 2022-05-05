import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 1,
      title: '계란 2판 사기',
      done: true,
      category: 'business',
    },
    {
      id: 2,
      title: '맥북 프로 M1 Max CTO 버전 사기',
      done: false,
      category: 'business',
    },
    {
      id: 3,
      title: '오늘의 TIL 작성하기',
      done: false,
      category: 'business',
    },
    {
      id: 4,
      title: 'TodoList 사이트 만들기',
      done: true,
      category: 'personal',
    },
  ],
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
