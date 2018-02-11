import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { submitProblemResponse } from './../store/actions/speedtest'
import MathProblem from './MathProblem.js'
const { connect } = PreactRedux

class Speedtest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='Speedtest page'>
      <div className = 'math-problem-set'>
        {this.props.speedtest.map((mathProblem, index) => (
          <MathProblem mathProblem={mathProblem} problemIndex={index} key={index} _submitProblemResponse={this.props._submitProblemResponse} />
        ))}
      </div>
    </div>)
  }
}

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state)
  }),
  (dispatch) => ({
    _submitProblemResponse: (problemIndex, value) => dispatch(submitProblemResponse(problemIndex, value))
  })
)(Speedtest)
