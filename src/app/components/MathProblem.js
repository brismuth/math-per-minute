import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

export default class MathProblem extends Component {
  constructor(props) {
    super(props);
  }

  submitResponse() {
    if (this.numInput.value !== '') {
      this.props._submitProblemResponse(this.props.problemIndex, parseInt(this.numInput.value));
    }
  }

  keyPress(evt) {
    const enterCode = 13;
    const spaceCode = 32;
    if (evt.which == enterCode || evt.keyCode == enterCode
      || evt.which == spaceCode || evt.keyCode == spaceCode) {
      this.submitResponse();
    }
  }

  focusIfNecessary() {
    if (this.props.mathProblem.isCurrentProblem) {
      this.numInput.focus();
    }
  }

  componentDidMount() {
    this.focusIfNecessary();
  }

  componentDidUpdate() {
    this.focusIfNecessary();
  }

  render() {
    const mathProblem = this.props.mathProblem;
    const currentProblemClass = mathProblem.isCurrentProblem ? 'current-problem' : '';
    const correctAnswer = mathProblem.response !== null && mathProblem.isCorrect ? 'correct-answer' : '';
    const wrongAnswer =  mathProblem.response !== null && !mathProblem.isCorrect ? 'wrong-answer' : '';
    const classes = `${currentProblemClass} ${correctAnswer} ${wrongAnswer} math-problem`;

    return (
      <div className={classes}>
        <div className="row">
          <div className="number">{mathProblem.num1}</div>
        </div>
        <div className="row">
          <div className="symbol">{mathProblem.symbol1}</div>
          <div className="number">{mathProblem.num2}</div>
        </div>
        <div className="row row-result">
          = <input className="number" type="number" value={mathProblem.response} disabled={!mathProblem.isCurrentProblem} ref={(input) => { this.numInput = input; }} onKeyPress={evt => this.keyPress(evt)} />
          <button className='btn btn-success' onClick={evt => this.submitResponse(evt)}>Submit</button>
        </div>
      </div>
    );
  }
};
