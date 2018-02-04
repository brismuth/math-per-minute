import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

export default class MathProblem extends Component {
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
