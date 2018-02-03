import { GENERATE_SPEED_TEST, GENERATE_SPEED_TEST_SUCCESS, GENERATE_SPEED_TEST_ERROR, INVALIDATE_GENERATE_SPEED_TEST } from './../actions/speedtest'

export const initialState = {
  didInvalidate: false,
  isFetching: false,
  hasFetched: false,
  hasError: false,
  error: null,
  mathProblems: [] // do not mutate these
}

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case GENERATE_SPEED_TEST:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: true,
        hasFetched: false,
        hasError: false,
        error: null
      })
    case GENERATE_SPEED_TEST_ERROR:
      return Object.assign({}, state, {
        hasError: true,
        error: payload,
        hasFetched: true,
        isFetching: false,
        didInvalidate: true
      })
    case GENERATE_SPEED_TEST_SUCCESS:
      return Object.assign({}, state, {
        mathProblems: payload,
        hasFetched: true,
        isFetching: false,
        didInvalidate: false
      })
    case INVALIDATE_GENERATE_SPEED_TEST:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    default:
      return state
  }
}
