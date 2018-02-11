import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { submitProblemResponse } from './../store/actions/speedtest'
import MathProblem from './MathProblem.js'
const { connect } = PreactRedux

class Speedtest extends Component {
  constructor(props) {
    super(props);
    this.problemSet = null;
    this.currentProblem = null;
  }

  updatePosition() {
    const offset = this.currentProblem.base.offsetLeft - 160;
    this.problemSet.style.left = `-${offset}px`;
  }

  componentDidMount() {
    this.updatePosition();
  }

  componentDidUpdate() {
    this.updatePosition();
  }

  render() {
    return (<div className='Speedtest page'>
      <div className='math-problem-set' ref={(problemSet) => { this.problemSet = problemSet; }}>
        {this.props.speedtest.map((mathProblem, index) => (
          <MathProblem mathProblem={mathProblem} problemIndex={index} key={index} _submitProblemResponse={this.props._submitProblemResponse} ref={(problem) => { if (mathProblem.isCurrentProblem) { this.currentProblem = problem; } }} />
        ))}
      </div>
    </div>)
  }
}

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state),
  }),
  (dispatch) => ({
    _submitProblemResponse: (problemIndex, value) => dispatch(submitProblemResponse(problemIndex, value))
  })
)(Speedtest)
