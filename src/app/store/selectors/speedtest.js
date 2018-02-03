// import { createSelector } from 'reselect'
import { getId } from './meta'
export const getSpeedtest = (state) => state.speedtest.collection
export const getMathProblem = (state) => { // todo: fix fugg it hack, make bullet proof
  const id = getId(state)
  if (!id) {
    return null
  }
  const speedtest = state.speedtest.collection.filter((post) => post.id.toString() === id.toString())
  return speedtest.length ? speedtest[0] : null
}
export const getHasFetchedSpeedtest = (state) => state.speedtest.hasFetched
export const getShouldFetchSpeedtest = (state) => state.speedtest.collection.length === 0 || state.speedtest.didInvalidate
