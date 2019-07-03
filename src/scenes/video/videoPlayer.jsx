import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { videoService } from '../../services/video'
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        
        this.state = videoService.get(props.id);
    }


    render = () => {
        return (
            <section as={Col} id="videoBrowse" className="justify-content-center">
                <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <h1>{this.state.title}</h1>
                    <h1>testezera da massa do video</h1>
               </Row>
               <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <ReactPlayer id="react-player" url="https://www.youtube.com/watch?v=ZUJJdeByJa0" playing />
               </Row>
               <Row xs={12} sm={12} md={10} lg={8} xl={6} className="justify-content-center">
                    <p>Testezerao da massaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>{this.state.description}</p>
               </Row>
            </section>
        )
    }
}