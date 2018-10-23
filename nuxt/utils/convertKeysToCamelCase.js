import { forEach, camelCase } from 'lodash'


export default (data) => {
  const obj = {}
  forEach(data, (value, key) => obj[camelCase(key)] = value)
  return obj
}
