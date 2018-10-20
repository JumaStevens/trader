import * as TwitterSearch from './twitter/search'
import * as AnalyzeSentiment from './analyze/sentiment'
import * as EmailSubscribe from './email/subscribe'


export const twitterSearch = TwitterSearch.listener
export const analyzeSentiment = AnalyzeSentiment.listener
export const emailSubscribe = EmailSubscribe.listener
