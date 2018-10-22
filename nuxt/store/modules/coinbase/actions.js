import moment from 'moment'
import webSocketInit from '~/services/webSocketInit'
// import coinbaseClient from '~/services/coinbaseInit'


export default {
  async feedInit ({ state, commit, dispatch }) {
    try {
      const { socketEndpoint: url } = state
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
    // console.log('feedOnMessage Data: ', event.data)

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


  // async coinbaseInit ({ commit }) {
  //   try {
  //     const coinbase = await coinbaseClient()
  //   }
  //   catch (e) {
  //     console.error(e)
  //   }
  // },



  async historicRateInit ({ state, dispatch }) {
    try {
      const { productIds } = state
      for (const productId of productIds) await dispatch('historicRateFetch', { productId })
    }
    catch (e) {
      console.error(e)
    }
  },


  // async historicRateFetch ({ state, commit }, { productId }) {
  //   try {
  //     // const productId = 'ETH-USD'
  //     const url = `${state.restEndpoint}/products/${productId}/candles`
  //
  //     const params = {
  //       start: moment().toISOString(),
  //       end: moment().add({ days: 1 }).toISOString(),
  //       granularity: 300 // == 5 minute candles
  //     }
  //
  //     const { data } = await this.$axios({ url, params })
  //     const itemKeys = ['time', 'low', 'high', 'open', 'close', 'volume']
  //
  //     data.forEach(item => {
  //       const candle = {}
  //       item.forEach((val, i) => candle[itemKeys[i]] = val)
  //       commit('SET_HISTORIC_PRICE', { productId, candle })
  //     })
  //
  //     return
  //   }
  //   catch (e) {
  //     console.error(e)
  //     throw e
  //   }
  // }


  async historicRateFetch ({ state, commit }, { productId }) {
    try {
      // const productId = 'ETH-USD'
      const url = `${state.restEndpoint}/products/${productId}/candles`

      const params = {
        start: moment().toISOString(),
        end: moment().add({ days: 1 }).toISOString(),
        granularity: 300 // == 5 minute candles
      }

      const { data } = await this.$axios({ url, params })
      const itemKeys = ['time', 'low', 'high', 'open', 'close', 'volume']
      const candles = {}

      data.forEach(item => {
        const candle = {}
        item.forEach((val, i) => candle[itemKeys[i]] = val)
        candles[candle.time] = candle
      })

      commit('SET_HISTORIC_PRICE', { productId, candles })

      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  }
}
