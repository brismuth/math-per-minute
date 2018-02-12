export const getSpeedtest = (state) => state.speedtest.mathProblems
export const getHasFetchedSpeedtest = (state) => state.speedtest.hasFetched
export const getShouldFetchSpeedtest = (state) => state.speedtest.mathProblems.length === 0 || state.speedtest.didInvalidate
export const getTestActive = (state) => state.speedtest.testActive
export const getCorrectCount = (state) => {
	let correctCount = 0;
	state.speedtest.mathProblems.some(function(problem) {
		if (problem.response === null) {
			return true; // exit
		}
		if (problem.isCorrect) {
			correctCount++;
		}
	});
	return correctCount;
}
export const getIncorrectCount = (state) => {
	let incorrectCount = 0;
	state.speedtest.mathProblems.some(function(problem) {
		if (problem.response === null) {
			return true; // exit
		}
		if (!problem.isCorrect) {
			incorrectCount++;
		}
	});
	return incorrectCount;
}
