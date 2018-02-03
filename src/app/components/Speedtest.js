import { h } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { getSpeedtest } from './../store/selectors/speedtest'
import { updateLocation } from './../store/actions/meta'
import Link from './Link'
const { connect } = PreactRedux

const MathProblem = ({ mathProblem, _updateLocation }) => (
  <li className='MathProblem'>
    <Link href={`/blog/${mathProblem.id}`} onClick={() => _updateLocation(`/blog/${mathProblem.id}`)}>
      {mathProblem.title}
    </Link>
  </li>
)

const Speedtest = ({ speedtest, _updateLocation }) => (
  <ul className='Speedtest page'>
    {speedtest.map((mathProblem, i) => (
      <MathProblem _updateLocation={_updateLocation} mathProblem={mathProblem} key={i} />
    ))}
  </ul>
)

export default connect(
  (state) => ({
    speedtest: getSpeedtest(state)
  }),
  (dispatch) => ({
    _updateLocation: (url) => dispatch(updateLocation(url))
  })
)(Speedtest)
