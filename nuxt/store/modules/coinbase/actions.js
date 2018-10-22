import webSocketInit from '~/services/webSocketInit'
import moment from 'moment'


export default {
  async feedInit ({ state, commit, dispatch }) {
    try {
      const { socketUrl: url } = state
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
  },


  async fetchHistoricRates ({}) {
    try {
      const productId = 'ETH-USD'
      const start = moment().toISOString()
      const end = moment().add({ days: 1 }).toISOString()

      console.log('start: ', start)
      console.log('end: ', end)

      const axiosConfig = {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        },
        method: 'get',
        url: `https://api.pro.coinbase.com/${productId}/candles`,
        params: {
          start,
          end,
          granularity: '300'
        }
      }

      console.log('axiosConfig: ', axiosConfig)

      const res = await this.$axios(axiosConfig)
      console.log('res: ', res)

    }
    catch (e) {
      console.error(e)
    }
  }
}
