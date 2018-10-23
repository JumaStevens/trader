import { forEach } from 'lodash'
import moment from 'moment'


export default {
  currentTickerPrice (state) {
    const { ticker } = state
    const currentTickerPrice = {}

    forEach(ticker, (value, key) => {
      const currentTickerKey = Math.max(...Object.keys(value))
      const price = ticker[key][currentTickerKey].price
      currentTickerPrice[key] = price.toFixed(2)
    })

    return currentTickerPrice
  },


  historicPrice (state) {
    const { historicRate, ticker } = state
    const data = {}

    forEach(historicRate, (value, key) => {
      data[key] = { ...data[key], ...value }
    })

    forEach(ticker, (value, key) => {
      const valueObj = Object.values(value)[0]
      // ['time', 'low', 'high', 'open', 'close', 'volume']
      const newTicker = {}
      newTicker[valueObj.time] = valueObj
      data[key] = { ...data[key], ...newTicker }
    })

    return data
  },


  historicRate (state) {
    const { historicRate } = state
    return historicRate
  },


  OHLCV (state, getters) {
    const { ticker, productIds } = state
    const historicRate = getters.historicRate
    console.log('historicRate: ', historicRate)

    const lastHistoricRateTime = {}
    forEach(historicRate, (value, key) => lastHistoricRateTime[key] = Math.max(...Object.keys(value)))

    const OHLCV = { ...historicRate }

    forEach(ticker, (value, key) => {
      const addTime = 300 // 5 minutes
      const time = lastHistoricRateTime[key] //+ addTime
      const maxTime = value[Math.max(...Object.keys(value))].time

      for (let i=time; i<maxTime; i=i+addTime) {
        const newHistoricRate = Object.values(value)
          .filter(a => a.time >= i && a.time < i + addTime)
          .reduce((acc, cur, idx, src) => {
            const data = {
              time: time,
              low: acc.price ? Math.min(acc.price, cur.price) : cur.price,
              high: acc.price ? Math.max(acc.price, cur.price) : cur.price,
              open: src[Math.min(...Object.keys(src))].price,
              close: src[Math.max(...Object.keys(src))].price,
              volume: 0
            }
            return { [time]: data }
          }, {})
        OHLCV[key] = { ...OHLCV[key], ...newHistoricRate }
      }

    })

    return OHLCV
  }
}
