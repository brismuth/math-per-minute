import { h } from 'preact' // eslint-disable-line no-unused-vars
import { updateLocation } from './../store/actions/meta'

const Footer = () => (
  <footer className='footer'>
	© {(new Date()).getFullYear()} <a href="https://mathperminute.com" target="_blank">mathperminute.com</a>
  </footer>
)

export default Footer