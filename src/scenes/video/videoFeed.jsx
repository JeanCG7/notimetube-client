import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import VideoCard from '../../components/videoCard';

export default class VideoFeed extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <section id="videoFeed">
                <h1 className="align-self-center">Vídeos</h1>
                <Row>
                    {this.props.videos !== undefined && this.props.videos.map(video => {
                        return (
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <VideoCard title={video.title}
                                    text={video.description} />
                            </Col>
                        );
                    })}
                </Row>
            </section>
        )
    }
}