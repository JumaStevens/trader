import webSocketInit from '~/services/webSocketInit'


export default {
  async feedInit ({ state, commit, dispatch }) {
    try {
      const { url } = state
      const socket = await webSocketInit({ url })
      commit('SET_SOCKET', { socket })
      dispatch('feedSubscribe')
    }
    catch(e) {
      console.error(e)
      dispatch('feedOnError', { event })
    }
  },


  feedSubscribe ({ state, commit, dispatch }) {
    const { socket, productIds, channels } = state
    const subscribe = JSON.stringify({
      type: 'subscribe',
      product_ids: productIds,
      channels
    })
    socket.onmessage = event => dispatch('feedOnMessage', { event })
    socket.onclose = event => dispatch('feedOnClose', { event })
    socket.onerror = event => dispatch('feedOnError', { event })
    socket.send(subscribe)
  },


  feedUnsubscribe ({ state }) {
    const { socket, productIds, channels } = state
    const unsubscribe = JSON.stringify({
      type: 'unsubscribe',
      product_ids: productIds,
      channels
    })
    socket.send(unsubscribe)
  },


  feedClose ({ state }) {
    const { socket } = state
    socket.close()
  },


  feedOnMessage ({ commit, dispatch }, { event }) {
    const data = JSON.parse(event.data)
    // console.log('feedOnMessage: ', event)
    // console.log('feedOnMessage Data: ', data)

    if (data.type === 'subscriptions' && data.channels.length === 0) dispatch('feedClose')

    if (data.type === 'heartbeat') commit('SET_HEARTBEAT', { data })

    if (data.type === 'ticker') commit('SET_TICKER', { data })

    // if (data.type === 'l2update') commit('SET_ORDER_BOOK', { data })
  },


  feedOnClose ({}, { event }) {
    console.log('feedOnClose: ', event)
  },


  feedOnError ({ state, dispatch }, { event }) {
    console.log('feedOnError: ', event)
    setTimeout(() => dispatch('feedInit'), 1000 * 15)
  }
}
