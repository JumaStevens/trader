export default {
  restEndpoint: 'https://api.pro.coinbase.com',
  socketEndpoint: 'wss://ws-feed.pro.coinbase.com',
  socket: {},
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
  orderBook: {},
  ticker: {},
  historicPrice: {}
}
