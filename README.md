# 원티드 프리온보딩 TEAM_7 TODO LIST

- 카테고리별 Todo CRUD 기능
- TodoList 검색 기능

## 배포 주소

[배포 주소](https://wanted-pre-onboarding-7team.github.io/TodoList/)

## 팀원

| | | | | |
|---|---|---|---|---|
|김병진|남효현|박상원|배수인|설혜린|
|양이진|유재민|이득규|조석희|한지선|

## 기능 구현

### 사이드바

- 본래 TodoList가 자리잡던거 TodoListWrap 컴포넌트로 분리
- Transform 사용해서 TodoList 컴포넌트 이동
- 사이드바 열고 닫을시 애니메이션 추가

### TODO 카테고리

- recoil의 atom 사용하여 todolist에 대한 상태 관리
- category box 구현
  - todlist의 done된 값에 맞게 slide 생성
   - category box 클릭시 category형식에 filter 된 todolist 값 생성 (recoil selector 사용)
- localStorage 사용하여 todolist 초깃값 셋팅

### TODO 체크리스트

- input태그 컴포넌트로 분리
- 카테고리별 Todo list 색 지정
- check 했을 때 text에 line-through 와 input 색 변경
- check 값을 판단해서 useEffect를 사용해서 check 값이 변경
- TodoList값이 변경 했을 때 이전 localStroage 값을 지우고 다시 저장

### TODO 추가

- 창 열기 애니메이션 구현: keyframe 및 scss의 @for 반복문 활용
- addTodoList 커스텀 훅: 뷰와 로직을 분리함으로써 가독성 향상 및 유지보수 고려
- 커스텀 alert창 구현: 라이브러리 sweetAlert2 사용
- 카테고리 선택기능 구현: 배열을 순회하며 화면에 표시되도록 확장성 고려
- 로컬스토리지 저장기능 구현: 브라우저를 닫아도 추가한 목록 유지
- list의 id값 난수화를 통한 의존성 제거: 라이브러리 uuid 사용

### TODO 드래그 & 드롭

- drag한 요소와 drop한 위치의 요소를 서로 변경하는 방법 적용
- dataTransfer를 이용해, 현재 드래그 하는 요소 값을 드롭 다운할 대상에게 추가 및 값 이동
- dataset.position으로 리스트의 위치를 서로 변경

### TODO 검색

- 우측 상단의 검색 버튼을 누르면 입력창 노출
- 현재 검색어를 포함하는 todo만 화면에 표시
- Enter를 누르거나 입력창을 벗어나면 현재 검색어를 유지한채 입력창 닫힘
- ESC를 누르면 검색어 삭제
- 검색어를 포함하지 않는 todo는 todo.hidden 값을 변경해 숨김 처리

### TODO 수정 / 삭제

- 상세페이지 마크업: SASS, CSS Module을 활용
- 상세페이지 모달 창: To do list 클릭 시 state값의 유무의 따라 상세 페이지 모달 창 표시
- 모달 창 애니메이션: 모달 창 오픈 시 keyframes 확장 기능을 활용
- TODO 수정: input 텍스트를 인자로 전달받아 localStorage의 To do list가 업데이트 되도록 구현 및 공백값 에러 처리
- TODO 삭제 : 해당 To do list의 id를 체크하여 localStorage에서 삭제 되도록 구현
- Toast 메시지 : 모달 창이 닫히면 Toast 메시지를 통해 수정/삭제 메시지 노출

### TODO 전체 삭제

- Delete All 버튼에 커서 포인터와 hover시 버튼 컬러를 변경해주어 사용자가 버튼임을 인지할 수 있게 구현
- Today's 오른쪽에 Delete All 버튼을 누르면 모달창이 열림
- 모달창에서 Delete 버튼을 누르면 모든 TodoList를 데이터 전체 삭제


