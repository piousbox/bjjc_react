import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { categoriesShow } from '../../actions'

import Center from '../Center'
import Debug from '../Debug'
import BjjcRouter from '../App/BjjcRouter'

import styles from './_Categories.scss'

class CategoriesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { category: {} }
    // this.props.dispatch(categoriesShow({}))
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, {category: nextProps.category }))
  }

  render () {
    // console.log('+++ +++ state:', this.state)
    // console.log('+++ +++ props:', this.props)

    let childrenCategories = []
    /* this.state.category.categories.forEach((child, idx) => {
      childrenCategories.push(<div>{child.title}</div>)
    }) */

    return (
      <div>
        <Link to={ BjjcRouter.categoryLink(this.state.category) }>{ this.state.category.title }</Link>
        <br />
        <img style={{ width: '100%' }} src={ this.state.category.photo_url } alt='' />
        { childrenCategories }
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

// export default connect(mapStateToProps)(CategoriesShow) 

export default CategoriesShow
