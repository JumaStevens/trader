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
  }
}
