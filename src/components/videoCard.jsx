import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class VideoCard extends Component {

  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    this.props.history.push('/videos/' + this.props.id);
  }

  render = () => {
    return (
      <Card>
        <Card.Img variant="top" src={require("../imgs/150x150.png")} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Button onClick={this.handleClick} variant="primary">Abrir vídeo</Button>
        </Card.Body>
      </Card>
    )
  }
}