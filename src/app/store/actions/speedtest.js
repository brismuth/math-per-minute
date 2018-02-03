import { getShouldFetchSpeedtest, getSpeedtest } from './../selectors/speedtest'

export const GENERATE_SPEED_TEST = 'api/GENERATE_SPEED_TEST'
export const GENERATE_SPEED_TEST_SUCCESS = 'api/GENERATE_SPEED_TEST_SUCCESS'
export const GENERATE_SPEED_TEST_ERROR = 'api/GENERATE_SPEED_TEST_ERROR'
export const INVALIDATE_GENERATE_SPEED_TEST = 'api/INVALIDATE_GENERATE_SPEED_TEST'

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

const generateSpeedtest = () => (dispatch, getState, fetchMethod) => {
  dispatch(startAction(GENERATE_SPEED_TEST))
  let problemCount = 4; // start with this many
  let mathProblems = [];
  while (problemCount--) {
    mathProblems.push(generateProblem());
    mathProblems[mathProblems.length - 1].index = mathProblems.length - 1;
  }

  return dispatch(successAction(GENERATE_SPEED_TEST_SUCCESS, mathProblems));
}

export const generateSpeedtestIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  return getShouldFetchSpeedtest(state) ? dispatch(generateSpeedtest()) : Promise.resolve(getSpeedtest(state))
}

export const submitProblemResponse = (problemIndex, response) => (dispatch, getState) => {
  console.log('submitProblemResponse', problemIndex, response);
  const state = getState()
  return getShouldFetchSpeedtest(state) ? dispatch(generateSpeedtest()) : Promise.resolve(getSpeedtest(state))
}


/********************************************************
**************** Action helpers *************************
********************************************************/
let generateProblem = () => {
  let symbol = ['+', '-'][getRandomInt(0, 1)];

  return {
    num1: getRandomInt(1, 15),
    symbol1: symbol,
    num2: getRandomInt(1, 9)
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}