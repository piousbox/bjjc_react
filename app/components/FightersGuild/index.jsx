import React from 'react'

import Inventory from './Inventory'
import WorldMap from './WorldMap'
import LocationMap from './LocationMap'

class FightersGuild extends React.Component {

  constructor(props) {
    super(props)
    let currentUser = localStorage.getItem('fbEmail')    
  }

  render () {
    return(
      <div>
        <WorldMap/>
        <LocationMap/>
        <Inventory/>
      </div>
    )
  }
}

export default FightersGuild
