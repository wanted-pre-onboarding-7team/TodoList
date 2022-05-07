function makeColorWidthText(total, done) {
  const colorPersent = isNaN((done / total) * 100) ? 0 : (done / total) * 100
  return colorPersent
}

const filterTodoList = (categoryType, todolist) => {
  const result = categoryType === 'all' ? todolist : todolist.filter((item) => item.category === categoryType)
  return result
}

const checkFilteredTodoList = (filteredTodoList) => {
  return filteredTodoList.filter((item) => item.done === true).length
}

export { makeColorWidthText, filterTodoList, checkFilteredTodoList }
