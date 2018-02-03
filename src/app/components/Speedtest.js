import { h } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { updateLocation } from './../store/actions/meta'
import Link from './Link'
const { connect } = PreactRedux

const MathProblem = ({ mathProblem, _updateLocation }) => (
  <div className='math-problem'>
    <div className="row">
      <div className="number">{mathProblem.num1}</div>
    </div>
    <div className="row">
      <div className="symbol">{mathProblem.symbol1}</div>
      <div className="number">{mathProblem.num2}</div>
    </div>
    <div className="row row-result"><input className="number" type="number" id="math-problem-result" /></div>
  </div>
)

const Speedtest = ({ speedtest, _updateLocation }) => (
  <div className='Speedtest page'>
    <div className = 'math-problem-set'>
      {speedtest.map((mathProblem) => (
        <MathProblem mathProblem={mathProblem} key={mathProblem.number} />
      ))}
    </div>
  </div>
)

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state)
  }),
  (dispatch) => ({
    _updateLocation: (url) => dispatch(updateLocation(url))
  })
)(Speedtest)
