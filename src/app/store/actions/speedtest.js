import { getCorrectCount, getIncorrectCount } from './../selectors/speedtest'
export const RESET_SPEEDTEST = 'speedtest/RESET_SPEEDTEST'
export const GENERATE_SPEED_TEST = 'speedtest/GENERATE_SPEED_TEST'
export const GENERATE_SPEED_TEST_SUCCESS = 'speedtest/GENERATE_SPEED_TEST_SUCCESS'
export const GENERATE_SPEED_TEST_ERROR = 'speedtest/GENERATE_SPEED_TEST_ERROR'
export const INVALIDATE_GENERATE_SPEED_TEST = 'speedtest/INVALIDATE_GENERATE_SPEED_TEST'
export const SUBMIT_PROBLEM_RESPONSE = 'speedtest/SUBMIT_PROBLEM_RESPONSE'
export const ADD_PROBLEM = 'speedtest/ADD_PROBLEM'
export const TIMER_FINISHED = 'speedtest/TIMER_FINISHED'

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

const generateSpeedtest = () => (dispatch, getState) => {
  dispatch(startAction(GENERATE_SPEED_TEST))
  let problemCount = 4; // start with this many problems
  let mathProblems = [];
  while (problemCount--) {
    mathProblems.push(generateProblem());
  }

  mathProblems[0].isCurrentProblem = true;

  return dispatch(successAction(GENERATE_SPEED_TEST_SUCCESS, mathProblems));
}

export const generateSpeedtestIfNeeded = () => (dispatch, getState) => {
  return dispatch(generateSpeedtest());
}

export const submitProblemResponse = (problemIndex, response) => (dispatch, getState) => {
  dispatch(successAction(SUBMIT_PROBLEM_RESPONSE, { problemIndex, response }));
  dispatch(successAction(ADD_PROBLEM, generateProblem()));
}

export const timerFinished = () => (dispatch, getState) => {
  dispatch(startAction(TIMER_FINISHED));
  dispatch(recordScore());
}

export const resetSpeedtest = () => (dispatch, getState) => {
  dispatch(startAction(RESET_SPEEDTEST));
  return dispatch(generateSpeedtest());
}

const recordScore = () => (dispatch, getState, fetchMethod) => {
  const state = getState();
  return fetchMethod('/api/speedtest/score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      correct: getCorrectCount(state),
      incorrect: getIncorrectCount(state),
    }),
  });
}

/********************************************************
**************** Action helpers *************************
********************************************************/
let generateProblem = () => {
  let num1 = getRandomInt(1, 15);
  let symbol = ['+', '-'][getRandomInt(0, 1)];
  let num2 = getRandomInt(1, 9);
  let answer = num1 + parseInt(symbol + num2);

  // the server template should be simple
  if (!__CLIENT__) {
    num1 = '';
    symbol = '';
    num2 = '';
  }

  return {
    num1,
    symbol1: symbol,
    num2,
    answer,
    response: null,
    isCurrentProblem: false,
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
