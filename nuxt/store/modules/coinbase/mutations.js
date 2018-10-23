import Vue from 'vue'
import moment from 'moment'

export default {
  SET_SOCKET (state, { socket }) {
    state.socket = socket
    console.log('state socket: ', socket)
  },


  SET_HEARTBEAT (state, { data }) {
    const { productId, sequence } = data
    const heartbeat = { ...state.heartbeat[productId] }
    heartbeat[sequence] = data
    Vue.set(state.heartbeat, productId, heartbeat)
    // console.log('state: ', state.heartbeat)
  },


  SET_ORDER_BOOK (state, { data }) {
    const { productId, sequence } = data
    const orderBook = { ...state.orderBook[productId] }
    orderBook[sequence] = data
    state.orderBook[productId] = orderBook
    // console.log('state: ', state.orderBook)
  },


  SET_TICKER (state, { data }) {
    // console.log('SET_TICKER: ', data)
    const { productId, sequence } = data
    const ticker = { ...state.ticker[productId] }
    ticker[sequence] = data
    Vue.set(state.ticker, productId, ticker)
    // console.log('ticker state: ', state.ticker)
  },


  SET_HISTORIC_RATE (state, { productId, candles }) {
    const historicRate = { ...state.historicRate[productId], ...candles }
    Vue.set(state.historicRate, productId, historicRate)
    console.log('historic rate state: ', state.historicRate)
  }
}
