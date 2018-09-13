import moment from 'moment'

export const toUnixTimestamp = (timestamp) => moment(timestamp).unix()
