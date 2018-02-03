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
      inputValue: 1
    };
    this.submitResponse = this.submitResponse.bind(this);
  }

  updateInputValue(evt) {
    console.log('evt', evt);
    this.setState({
      inputValue: evt.target.value
    });
  }

  submitResponse() {
    console.log('clicked');
    this.props._submitProblemResponse(this.props.mathProblem.index, this.state.inputValue);
  }

  render() {
    return (
      <div className='math-problem'>
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
      </div>
    );
  }
};


const Speedtest = ({ speedtest, _submitProblemResponse }) => (
  <div className='Speedtest page'>
    <div className = 'math-problem-set'>
      {speedtest.map((mathProblem) => (
        <MathProblem mathProblem={mathProblem} key={mathProblem.index} _submitProblemResponse={_submitProblemResponse} />
      ))}
    </div>
  </div>
)

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state)
  }),
  (dispatch) => ({
    _submitProblemResponse: (index) => dispatch(submitProblemResponse(index))
  })
)(Speedtest)
