import { h } from 'preact' // eslint-disable-line no-unused-vars
import PreactRedux from 'preact-redux' // introduces 2.9kb on gzipped bundle, todo: barf, fix
import { getPathname } from './../store/selectors/meta'
import Header from './Header'
import Speedtest from './Speedtest'
import About from './About'
import FourOhFour from './FourOhFour'
const { Provider, connect } = PreactRedux

const Content = connect(
  (state) => ({
    pathname: getPathname(state)
  })
)(({ pathname }) => {
  if (pathname === '/about') {
    return <About />
  } else if (pathname === '/') {
    return <Speedtest />
  } else {
    return <FourOhFour />
  }
})

export default ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <Content />
    </div>
  </Provider>
)
