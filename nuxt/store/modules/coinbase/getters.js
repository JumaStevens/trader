import { forEach } from 'lodash'


export default {
  currentTickerPrice (state) {
    const { ticker } = state
    const currentTickerPrice = {}

    forEach(ticker, (value, key) => {
      const currentTickerKey = Math.max(...Object.keys(value))
      const price = ticker[key][currentTickerKey].price
      currentTickerPrice[key] = price
    })

    return currentTickerPrice
  },


  historicPrice (state) {
    const { historicPrice, ticker } = state
    const data = {}

    forEach(historicPrice, (value, key) => {
      data[key] = { ...data[key], ...value }
    })

    forEach(ticker, (value, key) => {
      const valueObj = Object.values(value)[0]
      // ['time', 'low', 'high', 'open', 'close', 'volume']
      const newTicker = {}
      newTicker[valueObj.time] = valueObj
      data[key] = { ...data[key], ...newTicker }
    })

    console.log('data: ', data)

    return data
  }
}
