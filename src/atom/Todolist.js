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
      title: '맥북 프로 M1 Max CTO 버전 사기',
      done: false,
    },
    {
      id: 3,
      title: '오늘의 TIL 작성하기',
      done: false,
    },
    {
      id: 4,
      title: '이번주 WIL 작성하기',
      done: false,
    },
    {
      id: 5,
      title: '과제 리펙토링하기',
      done: false,
    },
    {
      id: 6,
      title: 'JavaScript 알고리즘 풀기',
      done: false,
    },
    {
      id: 7,
      title: '사이드 프로젝트 하기',
      done: false,
    },
    {
      id: 8,
      title: 'scss 문법',
      done: false,
    },
    {
      id: 9,
      title: '무한 스크롤',
      done: false,
    },
    {
      id: 10,
      title: 'localStorage 값 가져오기',
      done: false,
    },
  ],
})
