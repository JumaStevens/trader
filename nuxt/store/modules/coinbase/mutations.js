import Vue from 'vue'
import moment from 'moment'

export default {
  SET_SOCKET (state, { socket }) {
    state.socket = socket
    console.log('state socket: ', socket)
  },


  SET_HEARTBEAT (state, { data }) {
    const { product_id: productId, sequence } = data
    const heartbeat = { ...state.heartbeat[productId] }
    heartbeat[sequence] = data
    Vue.set(state.heartbeat, productId, heartbeat)
    // console.log('state: ', state.heartbeat)
  },


  SET_ORDER_BOOK (state, { data }) {
    const { product_id: productId, sequence } = data
    const orderBook = { ...state.orderBook[productId] }
    orderBook[sequence] = data
    state.orderBook[productId] = orderBook
    // console.log('state: ', state.orderBook)
  },


  SET_TICKER (state, { data }) {
    // console.log('SET_TICKER: ', data)
    const { product_id: productId, sequence } = data
    const ticker = { ...state.ticker[productId] }
    ticker[sequence] = { ...data, time: Math.floor(new Date().getTime() / 1000) }
    Vue.set(state.ticker, productId, ticker)
    // console.log('ticker state: ', state.ticker)
  },


  // SET_HISTORIC_PRICE (state, { productId, candle }) {
  //   const historicPrice = { ...state.historicPrice[productId] }
  //   historicPrice[candle.time] = candle
  //   Vue.set(state.historicPrice, productId, historicPrice)
  //   // console.log('historic rate state: ', state.historicPrice)
  // }

  SET_HISTORIC_PRICE (state, { productId, candles }) {
    const historicPrice = { ...state.historicPrice[productId], ...candles }
    // historicPrice[candle.time] = candles
    // console.log('candles: ', candles)
    // console.log('historicPrice: ', historicPrice)
    Vue.set(state.historicPrice, productId, historicPrice)
    console.log('historic rate state: ', state.historicPrice)
  }
}
