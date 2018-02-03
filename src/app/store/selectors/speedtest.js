// import { createSelector } from 'reselect'
import { getId } from './meta'
export const getSpeedtest = (state) => state.speedtest.mathProblems
export const getMathProblem = (state) => { // todo: fix fugg it hack, make bullet proof
  const id = getId(state)
  if (!id) {
    return null
  }
  const speedtest = state.speedtest.mathProblems.filter((post) => post.id.toString() === id.toString())
  return speedtest.length ? speedtest[0] : null
}
export const getHasFetchedSpeedtest = (state) => state.speedtest.hasFetched
export const getShouldFetchSpeedtest = (state) => state.speedtest.mathProblems.length === 0 || state.speedtest.didInvalidate
