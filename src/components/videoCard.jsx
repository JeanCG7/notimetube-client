import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class VideoCard extends Component {

    constructor(props){
        super(props)
    }

    render = () => {
        return(
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                    <Button to="/videos/:id" variant="primary">Abrir vídeo</Button>
                </Card.Body>
            </Card>
        )
    }
}