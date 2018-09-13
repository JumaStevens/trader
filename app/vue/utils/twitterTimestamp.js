import moment from 'moment'

export const twitterTimestamp = (timestamp) => moment(timestamp, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')
