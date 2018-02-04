import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { submitProblemResponse } from './../store/actions/speedtest'
import Link from './Link'
const { connect } = PreactRedux

class MathProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.submitResponse = this.submitResponse.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  submitResponse() {
    this.props._submitProblemResponse(this.props.problemIndex, this.state.inputValue);
  }

  render() {
    return (
      !this.props.mathProblem.response ? <div className='math-problem'>
        <div className="row">
          <div className="number">{this.props.mathProblem.num1}</div>
        </div>
        <div className="row">
          <div className="symbol">{this.props.mathProblem.symbol1}</div>
          <div className="number">{this.props.mathProblem.num2}</div>
        </div>
        <div className="row row-result">
          <button onClick={this.submitResponse}>></button>
          <input className="number" type="number" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        </div>
      </div> : null
    );
  }
};


const Speedtest = ({ speedtest, _submitProblemResponse }) => (
  <div className='Speedtest page'>
    <div className = 'math-problem-set'>
      {speedtest.map((mathProblem, index) => (
        <MathProblem mathProblem={mathProblem} problemIndex={index} key={index} _submitProblemResponse={_submitProblemResponse} />
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
