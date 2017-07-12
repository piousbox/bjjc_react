import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect,
         IndexRoute
} from 'react-router'
import { Provider, connect } from 'react-redux'
import 'whatwg-fetch'

import config     from 'config'
import PropTypes from 'prop-types'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import store      from '../../stores'
import Home from './Home'
import FightersGuild from '../FightersGuild/index'
import { CategoriesIndex, CategoriesShow } from '../Categories'
import { VideosShow } from '../Videos'
import MainNavigation from './MainNavigation'
import BjjcRouter from './BjjcRouter'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange = () => {
  }

  render() {
    return (
      <Provider store={store} >
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
          <Route path='/' component={MainNavigation} >
            <IndexRoute component={Home} />

            <Route path="/fg" component={FightersGuild} >
            </Route>

            <Route path={BjjcRouter.videosShowPath} component={VideosShow} />

            <Route path="/technique" component={CategoriesIndex}>
              <Route path='/technique/:slug_0' component={CategoriesIndex}>
                <Route path='/technique/:slug_0/:slug_1' component={CategoriesIndex}>
                  <Route path='/technique/:slug_0/:slug_1/:slug_2' component={CategoriesIndex}>
                    <Route path='/technique/:slug_0/:slug_1/:slug_2/:slug_3' component={CategoriesIndex}>   
                      <Route path='/technique/:slug_0/:slug_1/:slug_2/:slug_3/:slug_4' component={CategoriesIndex}>
                        <Route path='/technique/:slug_0/:slug_1/:slug_2/:slug_3/:slug_4/:slug_5' component={CategoriesIndex}>
                          <Route path='/technique/:slug_0/:slug_1/:slug_2/:slug_3/:slug_4/:slug_5/:slug_6' component={CategoriesIndex} />
                        </Route>
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    citiesIndex: state.citiesIndex,
  }
}

export default connect(mapStateToProps)(App)

