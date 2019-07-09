import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { authService } from '../../services/auth'
import { withRouter } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
      alert("Preencha e-mail e senha para continuar!")
    } else {
      try {
        const response = await authService.login({ email, password })
        window.localStorage.setItem('token', response.data.userAuth.token)
        window.localStorage.setItem('userId', response.data.userAuth._id)
        this.props.onClickLogin()
        this.props.history.push('/videos')
      } catch (err) {
        console.log(err)
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        })
        alert("Houve um problema com o login, verifique suas credenciais. T.T")
      }
    }
    // authService.login(this.state).then(resp => {
    //   alert('Logado com sucesso')
    //   this.props.onClickLogin()
    // }).catch(error => {
    //   alert('Erro ao logar')
    // })
  }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

  render = () => {
    return (
      <section id="login">
        <Form onSubmit={this.handleSubmit}>
          <Row className="justify-content-center">
            <Form.Group as={Col} xs={10} sm={8} md={6} >
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Group as={Col} xs={10} sm={8} md={6}>
              <Form.Label>Senha</Form.Label>
              <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Group as={Col} xs={10} sm={8} md={6}>
              <p>Ainda não tem uma conta? <Link to="/register">Registrar</Link></p>
              <Button to="/videos" variant="primary" type="submit">Login</Button>
            </Form.Group>
          </Row>
        </Form>
      </section>
    )
  }
}
export default withRouter(Login)