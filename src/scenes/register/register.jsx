import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { registerService } from '../../services/register'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        registerService.register(this.state);
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
                            <Form.Control value={this.state.nome} onChange={this.handleChange} type="text" name="name" placeholder="John" />
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
                            <Button variant="primary" type="submit">
                                Registrar
                        </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </section>
        )
    }
}