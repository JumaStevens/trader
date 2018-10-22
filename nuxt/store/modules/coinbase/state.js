export default {
  socket: {},
  socketUrl: 'wss://ws-feed.pro.coinbase.com',
  productIds: [
    'BTC-USD',
    'BCH-USD',
    'ETH-USD',
    'LTC-USD',
    'ETC-USD',
    'ZRX-USD'
  ],
  channels: [
    'ticker',
    // 'level2',
    // 'heartbeat'
  ],
  heartbeat: {},
  ticker: {},
  orderBook: {}
}
