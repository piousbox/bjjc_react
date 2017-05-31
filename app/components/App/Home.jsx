import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import styles from './_App.scss'
import Footer from './Footer'
import Newsitems from './Newsitems'

import logo_1 from './images/logo_1.jpg'
import Center from '../Center'

import {
  SET_API_URL,
} from '../../constants/AppConstants'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { LinkContainer } from 'react-router-bootstrap'

import { siteNewsitemsIndex } from '../../actions'

class Home extends React.Component {

  constructor(props) {
    super(props) 
    this.props.dispatch(siteNewsitemsIndex());
  }

  componentWillMount() {
  }

  render () {
    let newsitems = []
    if (this.props.siteNewsitems) {
      this.props.siteNewsitems.forEach((item, idx) => {
        newsitems.push(<li key={idx} >{item.name}</li>)
      })
    }

    return (
      <div style={{ marginTop: '60px' }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Center><img src={logo_1} alt='' /></Center>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  // children: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
    siteNewsitems: state.siteNewsitems,
  }
}

// export default Home
export default connect(mapStateToProps)(Home)

