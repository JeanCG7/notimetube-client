import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { authService } from '../../services/auth'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        authService.login(this.state).then(resp => {
            alert('Logado com sucesso');
            this.props.history.push('/videos');
        })
        .catch(error => {
            alert('Erro ao logar');
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render = () => {
        return (
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
                        <Form.Control  value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                
                <Row className="justify-content-center">
                    <Form.Group as={Col} xs={10} sm={8} md={6}>
                        <p>Ainda não tem uma conta? <Link to="/register">Registrar</Link></p>
                        <Button variant="primary" type="submit">
                        Login
                        </Button>             
                    </Form.Group>
                </Row>
          </Form>
        )
    }
}