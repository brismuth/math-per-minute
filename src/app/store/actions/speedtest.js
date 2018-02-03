import { getShouldFetchSpeedtest, getSpeedtest } from './../selectors/speedtest'

export const FETCH_SPEED_TEST = 'api/FETCH_SPEED_TEST'
export const FETCH_SPEED_TEST_SUCCESS = 'api/FETCH_SPEED_TEST_SUCCESS'
export const FETCH_SPEED_TEST_ERROR = 'api/FETCH_SPEED_TEST_ERROR'
export const INVALIDATE_FETCH_SPEED_TEST = 'api/INVALIDATE_FETCH_SPEED_TEST'

const checkStatus = (response) => {
  if (!response.ok) { // status in the range 200-299 or not
    return Promise.reject(new Error(response.statusText || 'Status not OK'))
  }
  return response
}

const parseJSON = (response) => response.json()

const startAction = (type) => ({ type })
const successAction = (type, json) => ({ type, payload: json })
const errorAction = (type, error) => ({ type, payload: error, error: true })

const fetchSpeedtest = () => (dispatch, getState, fetchMethod) => {
  dispatch(startAction(FETCH_SPEED_TEST))
  return fetchMethod('/api/speedtest/easy')
  .then(checkStatus)
  .then(parseJSON)
  .then((json) => dispatch(successAction(FETCH_SPEED_TEST_SUCCESS, json)))
  .catch((error) => dispatch(errorAction(FETCH_SPEED_TEST_ERROR, error)))
}

export const fetchSpeedtestIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  return getShouldFetchSpeedtest(state) ? dispatch(fetchSpeedtest()) : Promise.resolve(getSpeedtest(state))
}
