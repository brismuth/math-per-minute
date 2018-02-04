export const getSpeedtest = (state) => state.speedtest.mathProblems
export const getHasFetchedSpeedtest = (state) => state.speedtest.hasFetched
export const getShouldFetchSpeedtest = (state) => state.speedtest.mathProblems.length === 0 || state.speedtest.didInvalidate
