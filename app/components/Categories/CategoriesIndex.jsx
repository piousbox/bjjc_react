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
    console.log('+++ +++ categoriesIndex props:', props)

    super(props)
    this.state = { categories: [], category: {} }
    this.props.dispatch(categoriesIndex({ parentCategoryPath: props.params.categoryPath }))
  }

  componentWillReceiveProps(nextProps) {
    // console.log('+++ +++ nextProps:', nextProps)
    
    this.setState(Object.assign({}, this.state, { categories: nextProps.categories }))
  }

  render () {
    // console.log("+++ +++ CategoriesIndex props:", this.props)
    // console.log("+++ +++ CategoriesIndex state:", this.state.categories)

    let categories = []
    if (this.state.categories) {
      this.state.categories.forEach((item, idx) => {

        let childrenCategories = []
        item.categories.forEach((child, idx) => {
          childrenCategories.push(<div>{child.title}</div>)
        })
        
        categories.push(<Category key={idx} category={ item } />)
      })
    }
    
    return (
      <Grid>
        <Debug>categories index</Debug>
        <Row>
          <Col xs={12}>
            <h2><Center>{ this.state.category.name }</Center></h2>
            { categories }
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
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(CategoriesIndex)
