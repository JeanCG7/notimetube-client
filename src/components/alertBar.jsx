import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export default class AlertBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      variant: 'danger',
      message: 'Teste alert'
    }
  }

  render = () => {
    return (
      <Alert variant={this.state.variant}>
        {this.state.message}
      </Alert>
    );
  }
}