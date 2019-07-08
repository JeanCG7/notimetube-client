import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { videoService } from '../../services/video'

export default class VideoUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            file: null
        }
    }

    handleSubmit = (e) => {
        const data = new FormData();
        data.append('file', this.state.file);
        data.append('name', this.state.name);        
        data.append('description', this.state.description);
        data.append('uploadUser', window.localStorage.getItem('userId'));

        e.preventDefault();
        videoService.upload(data).then(resp => {
            if(resp.status == 201) {
                alert(resp.data.detail);
                this.props.history.push('/videos');
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleFile = (e) => {
        this.setState({file: e.target.files[0]})
    }

    render = () => {
        return (
            <section id="videoUpload">
                <h1>Upload de vídeo</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row className="justify-content-lg-center">
                        <Form.Group as={Col} xs={10} sm={8} md={6}>
                            <Form.Label>Arquivo</Form.Label>
                            <Form.Control onChange={this.handleFile} type="file" name="file" />
                        </Form.Group>
                    </Row>

                    <Row className="justify-content-lg-center">
                        <Form.Group as={Col} xs={4} sm={4} md={6} >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value={this.state.name} onChange={this.handleChange} type="text" name="name" placeholder="Nome do vídeo" />
                        </Form.Group>
                    </Row>

                    <Row className="justify-content-lg-center">
                        <Form.Group as={Col} xs={10} sm={8} md={6}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="4" value={this.state.description} onChange={this.handleChange} type="text" name="description" placeholder="Descrição" />
                        </Form.Group>
                    </Row>

                    <Row className="justify-content-lg-center">
                        <Form.Group as={Col} xs={10} sm={8} md={6}>
                            <Button variant="primary" type="submit">
                                Enviar
                        </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </section>
        )
    }
}