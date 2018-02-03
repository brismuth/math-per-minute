import { h } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux'
import { updateLocation } from './../store/actions/meta'
import Link from './Link'
const { connect } = PreactRedux

const Header = ({ _updateLocation }) => (
  <header className='Header'>
    <h1>
      <Link className='item' href='/' onClick={(e) => {
        _updateLocation('/')
      }}>Math Per Minute</Link>
    </h1>
    <nav>
      <Link className='item' href='/' onClick={(e) => {
        _updateLocation('/')
      }}>Time Me</Link>
      <Link className='item' href='/about' onClick={(e) => {
        _updateLocation('/about')
      }}>About</Link>
    </nav>
  </header>
)

export default connect(
  null,
  (dispatch) => ({
    _updateLocation: (url) => dispatch(updateLocation(url))
  })
)(Header)
