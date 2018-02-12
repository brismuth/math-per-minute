import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getMathProblems, getSpeedtestID, getTestActive, getCorrectCount, getIncorrectCount } from './../store/selectors/speedtest'
import { submitProblemResponse, resetSpeedtest } from './../store/actions/speedtest'
import MathProblem from './MathProblem.js'
import CountdownTimer from './CountdownTimer.js'
const { connect } = PreactRedux

class Speedtest extends Component {
  constructor(props) {
    super(props);
    this.problemSet = null;
    this.currentProblem = null;
  }

  resetPosition() {
    this.problemSet.style.left = '0px';
    this.problemSet.style.width = '100%';
  }

  updatePosition() {
    if (!this.currentProblem) return;

    let offset = this.currentProblem.base.offsetLeft - 60;
    if (offset < 0) offset = 0;

    this.problemSet.style.left = `-${offset}px`;
    this.problemSet.style.width = `calc(100% + ${offset}px)`;
  }

  componentDidMount() {
    this.updatePosition();
  }

  componentDidUpdate() {
    this.updatePosition();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.speedtestID != this.props.speedtestID) {
      this.resetPosition();
    }
  }

  render() {
    return (<div className='Speedtest page'>
      <div className='math-problem-set-wrapper'>
        <div className='math-problem-set' ref={(problemSet) => { this.problemSet = problemSet; }}>
          {this.props.mathProblems.map((mathProblem, index) => (
            <MathProblem mathProblem={mathProblem} problemIndex={index} key={this.props.speedtestID + '' + index} testActive={this.props.testActive} _submitProblemResponse={this.props._submitProblemResponse} ref={(problem) => { if (mathProblem.isCurrentProblem) { this.currentProblem = problem; } }} />
          ))}
        </div>
      </div>
      <div className='toolbar'>
        <CountdownTimer timeRemaining={60} />
        <div className='count correct-count'>{this.props.correctCount} 👍</div>
        <div className='count wrong-count'>{this.props.incorrectCount} 👎</div>
        <button className='btn btn-primary' onclick={this.props._resetSpeedtest}>↺</button>
      </div>
    </div>)
  }
}

export default connect(
  (state) => ({
    mathProblems: getMathProblems(state),
    speedtestID: getSpeedtestID(state),
    testActive: getTestActive(state),
    correctCount: getCorrectCount(state),
    incorrectCount: getIncorrectCount(state),
  }),
  (dispatch) => ({
    _submitProblemResponse: (problemIndex, value) => dispatch(submitProblemResponse(problemIndex, value)),
    _resetSpeedtest: () => dispatch(resetSpeedtest()),
  })
)(Speedtest)
