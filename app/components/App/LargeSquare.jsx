import React from 'react'

import Center from '../Center'

class LargeSquare extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <div className='ad' >
        <ins className='adsbygoogle'
             style={{ display: 'block' }}
             data-ad-client='ca-pub-5283251584689528'
             data-ad-slot='6996639849'
             data-ad-format='auto' />
      </div>
    )
  }
}

export default LargeSquare
