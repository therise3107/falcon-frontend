export const isObjectHasEmptyKey = object => Object.values(object).filter(val => val === '' || val === undefined || val === null).length > 0
export const isObjectEmpty = object => !isObjectHasEmptyKey(object)
export const cleanObj = object => {
  const cleanedObj = {}

  Object.keys(object).forEach(key => {
    if (object[key]) {
      cleanedObj[key] = object[key]
    }
  })

  return cleanedObj
}
export const compose = (...func) => value => func.reduce((result, currentFunc) => currentFunc(result), value)
export const sortBy = (arr, sortOrder) => arr.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b))
export const filterBy = (arr, filteringArr) => arr.filter(val => filteringArr.includes(val))
