import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { categoriesIndex } from '../../actions'

import Center from '../Center'
import Debug from '../Debug'
import BjjcRouter from '../App/BjjcRouter'

import styles from './_Categories.scss'
import Category from './CategoriesShow'

class CategoriesIndex extends React.Component {

  constructor(props) {
    super(props)
    // console.log('+++ +++ categoriesIndex constructor props:', props) // no props.params at first
    this.state = { allCategories: {}, thisIndexCategory: {}, thisShowCategory: {} }
    this.props.dispatch(categoriesIndex( props.params ))
  }

  componentWillReceiveProps(nextProps) {
    console.log('+++ +++ nextProps:', nextProps)
    // this.props.dispatch(categoriesIndex( nextProps.params ))

    let path = '/'

    if (this.state.allCategories[path]) {
      this.setState(Object.assign({}, this.state, { thisIndexCategory: this.state.allCategories[path] }))
    } else if (nextProps.allCategories[path]) {
      this.setState(Object.assign({}, this.state, { thisIndexCategory: nextProps.allCategories[path] }))
    }
  }

  render () {
    console.log("+++ +++ CategoriesIndex props:", this.props)
    console.log("+++ +++ CategoriesIndex state:", this.state)

    let categories = []
    if (this.state.thisIndexCategory.categories) {
      this.state.thisIndexCategory.categories.forEach((item, idx) => {
        let childrenCategories = []
        item.categories.forEach((child, idx_2) => {
          childrenCategories.push(
            <Col xs={2}>
              <Category category={child} key={idx_2} />
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
        technique > { this.props.params.slug_0 } > { this.props.params.slug_1 } > { this.props.params.slug_2 } > { this.props.params.slug_3 } > { this.props.params.slug_4 }
        <Row>
          <Col xs={12}>
            <Center><Debug>Category name:</Debug><h2>{ this.state.thisIndexCategory.name }</h2></Center>
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
