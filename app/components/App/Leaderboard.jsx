import React from 'react'

import Center from '../Center'

/**
 * BJJCollective
 */
class Leaderboard extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <Center>
        <div className='ad' >
          <ins className='adsbygoogle'
               style={{ display: 'block' }}
               data-ad-client='ca-pub-5283251584689528'
               data-ad-slot='5190100165'
               data-ad-format='auto' />
        </div>
      </Center>
    )
  }
}

export default Leaderboard

/*
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bjjc leaderboard -->
<ins class="adsbygoogle"
style="display:inline-block;width:728px;height:90px"
data-ad-client="ca-pub-5283251584689528"
data-ad-slot="5190100165"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
*/
