import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'

import { categoriesIndex } from '../../actions'

import Center from '../Center'
import Debug from '../Debug'

import styles from './_Categories.scss'

class CategoriesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: {}, category: {} }
    this.props.dispatch(categoriesIndex({ parentCategory: null }))
  }

  componentWillReceiveProps(nextProps) {
    // this.setState(Object.assign({}, this.state, { photos: nextProps.category.name }))
  }

  render () {
    // console.log("+++ +++ CategoriesIndex props:", this.props)
    // console.log("+++ +++ CategoriesIndex state:", this.state)
    
    return (
      <Grid>
        <Debug>categories index</Debug>
        <Row>
          <Col xs={12}>
            <h2><Center>{ this.state.category.name }</Center></h2>
          </Col>
        </Row>
      </Grid>
    ) 
  }
}

CategoriesIndex.propTypes = {
}

const mapStateToProps = (state, ownprops) => {
  return {
    category: state.category,
  }
}

export default connect(mapStateToProps)(CategoriesIndex)
