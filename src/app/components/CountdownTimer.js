import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
const { connect } = PreactRedux
import { getTestActive } from './../store/selectors/speedtest'
import { timerFinished } from './../store/actions/speedtest'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: '1:00',
    };
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.testActive && !this.props.testActive) {
      this.startTimer();
    }
    // reset button was clicked
    if (!nextProps.testActive && this.props.testActive) {
      this.stopTimer();
      this.setState({
        countdown: '1:00',
      });
    }
  }

  startTimer() {
    if (this.timerID) return;

    var t = new Date();
    t.setSeconds(t.getSeconds() + this.props.timeRemaining);
    this.endTime = t;

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopTimer() {
    if (!this.timerID) return;

    clearInterval(this.timerID);
    this.timerID = null;
  }

  tick() {
    const timeRemaining = this.endTime - new Date();
    const secondsRemaining = Math.floor(timeRemaining / 1000);
    const zeroPaddedSeconds = ("0" + secondsRemaining).slice(-2);
    const countdown = `0:${zeroPaddedSeconds}`;
    this.setState({
      ...this.state,
      countdown: countdown,
    });

    if (secondsRemaining === 0) {
      this.stopTimer();
      this.props._timerFinished();
    }
  }

  render() {
    return (
      <div className='countdown-timer'>
        {this.state.countdown}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testActive: getTestActive(state),
  }),
  (dispatch) => ({
    _timerFinished: () => dispatch(timerFinished())
  })
)(CountdownTimer)
