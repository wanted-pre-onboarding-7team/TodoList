import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 1,
      title: '계란 2판 사기',
      done: false,
    },
    {
      id: 2,
      title: '맥북 프로 사기',
      done: false,
    },
    {
      id: 3,
      title: '오늘의 TIL 작성하기',
      done: false,
    },
  ],
})
