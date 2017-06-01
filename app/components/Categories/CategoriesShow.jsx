import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { categoriesShow } from '../../actions'

import Center from '../Center'
import Debug from '../Debug'

import styles from './_Categories.scss'

class CategoriesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { category: {} }
    this.props.dispatch(categoriesShow({}))
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, {categories: nextProps.categories }))
  }

  render () {        
    return (
      <div key={idx}>
        <Link to={ BjjcRouter.categoryLink(item) }>{ item.title }</Link>
        { children_categories }
      </div>
    ) 
  }
}

CategoriesShow.propTypes = {
}

const mapStateToProps = (state, ownprops) => {
  return {
    category: state.category,
  }
}

export default connect(mapStateToProps)(CategoriesShow)
