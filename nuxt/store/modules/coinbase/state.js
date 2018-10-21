export default {
  socket: {},
  url: 'wss://ws-feed.pro.coinbase.com',
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
