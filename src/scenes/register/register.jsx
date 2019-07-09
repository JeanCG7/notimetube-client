import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { authService } from '../../services/auth'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
      alert("Preencha todos os dados para se cadastrar");
    } else {
      try {
        const response = await authService.register(this.state);
        alert(response.data.detail);
        if (response.status === 201) {
          this.props.history.push('/login');
        }
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
        alert("Ocorreu um erro ao registrar sua conta. T.T");
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render = () => {
    return (
      <section id="register">
        <Form onSubmit={this.handleSubmit}>
          <Row className="justify-content-lg-center">
            <Form.Group as={Col} xs={4} sm={4} md={6} >
              <Form.Label>Nome</Form.Label>
              <Form.Control value={this.state.name} onChange={this.handleChange} type="text" name="name" placeholder="John" />
            </Form.Group>
          </Row>

          <Row className="justify-content-lg-center">
            <Form.Group as={Col} xs={10} sm={8} md={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="John@email.com" />
            </Form.Group>
          </Row>

          <Row className="justify-content-lg-center">
            <Form.Group as={Col} xs={10} sm={8} md={6}>
              <Form.Label>Senha</Form.Label>
              <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="justify-content-lg-center">
            <Form.Group as={Col} xs={10} sm={8} md={6}>
              <Button variant="primary" type="submit">Registrar</Button>
            </Form.Group>
          </Row>
        </Form>
      </section>
    )
  }
}