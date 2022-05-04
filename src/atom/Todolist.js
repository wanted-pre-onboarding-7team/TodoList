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
    {
      id: 5,
      title: 'TodoList 사이트 만들기',
      done: true,
      category: 'personal',
    },
    {
      id: 6,
      title: 'TodoList 사이트 만들기',
      done: false,
      category: 'personal',
    },
  ],
})

export const todoListCategory = atom({
  key: 'todoListCategory',
  default: 'business',
})

export const filteredCategryTodoListState = selector({
  key: 'filteredCategryTodoListState',
  get: ({ get }) => {
    const todolist = get(todoListState)
    const category = get(todoListCategory)
    
    switch (category) {
      case 'business':
        return todolist.filter((item) => item.category === "business")

      case 'personal':
        return todolist.filter((item) => item.category === category)

      case 'nomal':
        return todolist.filter((item) => item.category === category)

      default:
        return todolist
    }
  },
})
