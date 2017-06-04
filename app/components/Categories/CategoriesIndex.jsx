import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { categoriesIndex } from '../../actions'

import Center from '../Center'
import Debug from '../Debug'
import BjjcRouter from '../App/BjjcRouter'
import BjjcBreadcrumbs from '../App/BjjcBreadcrumbs'

import styles from './_Categories.scss'
import CategoriesShowView from './CategoriesShowView'

class CategoriesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { allCategories: {}, thisIndexCategory: {}, thisShowCategory: {} }
    this.props.dispatch(categoriesIndex( props.params ))
  }

  componentWillReceiveProps(nextProps) {
    let path = '/'
    if (nextProps.params.slug_0) {
      path = nextProps.params.slug_0
      if (nextProps.params.slug_1) {
        path = `${path}/${nextProps.params.slug_1}`
        if (nextProps.params.slug_2) {
          path = `${path}/${nextProps.params.slug_2}`
          if (nextProps.params.slug_3) {
            path = `${path}/${nextProps.params.slug_3}`
            if (nextProps.params.slug_4) {
              path = `${path}/${nextProps.params.slug_4}`
            }
          }
        }
      }
    }

    if (this.props.allCategories[path]) {
      this.setState(Object.assign({}, this.state, { thisIndexCategory: this.props.allCategories[path] }))
    } else if (nextProps.allCategories[path]) {
      this.setState(Object.assign({}, this.state, { thisIndexCategory: nextProps.allCategories[path] }))
    } else {
      this.props.dispatch(categoriesIndex( this.props.params ))
    }
  }

  render () {
    let categories = []
    if (this.state.thisIndexCategory.categories) {
      this.state.thisIndexCategory.categories.forEach((item, idx) => {
        let childrenCategories = []
        item.categories.forEach((child, idx_2) => {
          childrenCategories.push(
            <Col key={idx_2} xs={2}>
              <CategoriesShowView child={ child } />
            </Col>
          )
        })
        categories.push(
          <Row key={idx} >
            <h3>{ item.title }</h3>
            { childrenCategories }
          </Row>
        )
      })
    }

    return (
      <Grid>
        <Debug>categories index</Debug>
        <BjjcBreadcrumbs path={this.props.params} />
        <Row>
          <Col xs={12}>
            <Center><Debug>Category name:</Debug><h5>{ this.state.thisIndexCategory.title }</h5></Center>
          </Col>
        </Row>
        { categories }
      </Grid>
    ) 
  }
}

CategoriesIndex.propTypes = {
}

const mapStateToProps = (stor, ownprops) => {
  return {
    allCategories: stor.categories,
    thisCategory: stor.category,
  }
}

export default connect(mapStateToProps)(CategoriesIndex)
