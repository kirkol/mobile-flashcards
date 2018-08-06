const logger = (store) => (next) => (action) => {
  console.log("---------")
    console.log('The action:', action)
    const returnValue = next(action)
    console.log('The new state:', store.getState())
  console.log("---------")
  return returnValue
}

export default logger