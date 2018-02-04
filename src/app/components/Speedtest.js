import { h } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { submitProblemResponse } from './../store/actions/speedtest'
import MathProblem from './MathProblem.js'
const { connect } = PreactRedux

const Speedtest = ({ speedtest, _submitProblemResponse }) => (
  <div className='Speedtest page'>
    <div className = 'math-problem-set'>
      {speedtest.map((mathProblem, index) => (
        !mathProblem.response ? <MathProblem mathProblem={mathProblem} problemIndex={index} key={index} autoFocus _submitProblemResponse={_submitProblemResponse} /> : null
      ))}
    </div>
  </div>
)

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state)
  }),
  (dispatch) => ({
    _submitProblemResponse: (problemIndex, value) => dispatch(submitProblemResponse(problemIndex, value))
  })
)(Speedtest)
