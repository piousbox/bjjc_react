import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import Center from '../Center'

import BjjcRouter from '../App/BjjcRouter'

import { Link } from 'react-router'

class VideosIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    let videos = []
    let videosCount = this.props.nVideos

    if (this.props.videos) {
      this.props.videos.forEach((video) => {
        videos.push(
          <div>
            <h5><Link to={ BjjcRouter.videosShowLink( video ) }>{ video.title }</Link></h5>
            <iframe width="420" height="315" src={`https://www.youtube.com/embed/${video.youtube_id}`}></iframe>
            <div dangerouslySetInnerHTML={{ __html: video.descr }} />
          </div>
        )
      })
    }

    return (
      <div>
        <Row>
          <Col sm={12}>
            <Center>videos ({videosCount})</Center>
            { videos }
          </Col>
        </Row>
      </div>
    )
  }
}

export default VideosIndex
