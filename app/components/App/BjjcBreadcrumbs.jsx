import React from 'react'

class BjjcBreadcrumbs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
  }

  render () {
    return (
      <div>
        technique > { this.props.path.slug_0 } > 
        { this.props.path.slug_1 } > 
        { this.props.path.slug_2 } > 
        { this.props.path.slug_3 } > 
        { this.props.path.slug_4 }
      </div>
    )
  }
}

export default BjjcBreadcrumbs
