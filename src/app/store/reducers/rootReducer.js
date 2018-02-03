import { combineReducers } from 'redux'
import meta from './meta'
import speedtest from './speedtest'

export default combineReducers({
  meta,
  speedtest
})
