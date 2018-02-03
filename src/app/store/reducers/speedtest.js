import { FETCH_SPEED_TEST, FETCH_SPEED_TEST_SUCCESS, FETCH_SPEED_TEST_ERROR, INVALIDATE_FETCH_SPEED_TEST } from './../actions/speedtest'

export const initialState = {
  didInvalidate: false,
  isFetching: false,
  hasFetched: false,
  hasError: false,
  error: null,
  collection: [] // do not mutate these
}

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case FETCH_SPEED_TEST:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: true,
        hasFetched: false,
        hasError: false,
        error: null
      })
    case FETCH_SPEED_TEST_ERROR:
      return Object.assign({}, state, {
        hasError: true,
        error: payload,
        hasFetched: true,
        isFetching: false,
        didInvalidate: true
      })
    case FETCH_SPEED_TEST_SUCCESS:
      return Object.assign({}, state, {
        collection: payload,
        hasFetched: true,
        isFetching: false,
        didInvalidate: false
      })
    case INVALIDATE_FETCH_SPEED_TEST:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    default:
      return state
  }
}
