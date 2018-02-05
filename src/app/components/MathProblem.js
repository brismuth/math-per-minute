import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

export default class MathProblem extends Component {
  constructor(props) {
    super(props);
  }

  submitResponse() {
    this.props._submitProblemResponse(this.props.problemIndex, this.numInput.value);
  }

  keyPress(evt) {
    const enterCode = 13;
    const spaceCode = 32;
    if (evt.which == enterCode || evt.keyCode == enterCode
      || evt.which == spaceCode || evt.keyCode == spaceCode) {
      this.props._submitProblemResponse(this.props.problemIndex, this.numInput.value);
    }
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
          = <input className="number" type="number" value="" ref={(input) => { this.numInput = input; }} onKeyPress={evt => this.keyPress(evt)} />
          <button onClick={evt => this.submitResponse(evt)}>Submit</button>
        </div>
      </div>
    );
  }
};
