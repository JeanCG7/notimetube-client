import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import VideoCard from '../../components/videoCard'
import { videoService } from '../../services/video'

export default class VideoFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: []
        }
    }

    componentDidMount = () => {
        videoService.getAll().then(resp => {
            this.setState({videos: resp.data})
        }).catch(error => {
            alert("Erro ao listar vídeos")
        })
    }

    render = () => {
        return (
            <section id="videoFeed">
                <h1 className="align-self-center">Vídeos</h1>
                <Row>
                    {this.state.videos !== undefined && this.state.videos.map(video => {
                        return (
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <VideoCard title={video.name}
                                    text={video.description}
                                    id={video._id}
                                    history={this.props.history} />
                            </Col>
                        );
                    })}
                </Row>
            </section>
        )
    }
}