import Vue from 'vue'


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


  SET_TICKER (state, { data }) {
    const { product_id: productId, sequence } = data
    const ticker = { ...state.ticker[productId] }
    ticker[sequence] = data
    Vue.set(state.ticker, productId, ticker)
    // console.log('state: ', state.ticker)
  },


  SET_ORDER_BOOK (state, { data }) {
    const { product_id: productId, sequence } = data
    const orderBook = { ...state.orderBook[productId] }
    orderBook[sequence] = data
    state.orderBook[productId] = orderBook
    // console.log('state: ', state.orderBook)
  }
}
