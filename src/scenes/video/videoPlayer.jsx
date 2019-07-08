import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { videoService } from '../../services/video'
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            file: ''
        }
    }

    componentDidMount = () => {
        videoService.get(this.props.id).then(resp => {
            this.setState({
                title: resp.data.name,
                description: resp.data.description,
                file: resp.data.file
            })
        })
    }


    render = () => {
        const baseUrl = 'D:\\UTFPR\\7 semestre\\Web 2\\projeto kassia-jean-final\\notimetube-api\\';
        return (
            <section as={Col} id="videoBrowse" className="justify-content-center">
                <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <h1>{this.state.title}</h1>
               </Row>
               <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <ReactPlayer id="react-player" url={baseUrl + this.state.file} playing />
               </Row>
               <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <p>{this.state.description}</p>
               </Row>
            </section>
        )
    }
}