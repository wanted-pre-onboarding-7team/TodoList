function makeColorWidthText(total, done) {
  const colorPersent = isNaN((done / total) * 100) ? 0 : (done / total) * 100
  return colorPersent
}

export { makeColorWidthText }
