import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import VideoCard from '../../components/videoCard';
import { videoService } from '../../services/video';

export default class VideoFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      search: ''
    }
  }

  componentDidMount = () => {
    this.getVideos();
  }

  getVideos = async () => {
    try {
      const response = await videoService.getAll(this.state.search);
      this.setState({ videos: response.data })
    } catch (err) {
      console.log(err);
      alert("Erro ao listar vídeos");
    }
  }

  onChangeSearch = async () => {
    try {
      const response = await videoService.getAll(this.state.search);
      this.setState({ videos: response.data })
    } catch (err) {
      console.log(err);
      alert("Erro ao listar vídeos");
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render = () => {
    return (
      <section id="videoFeed">
        <Form inline>
          <FormControl value={this.state.search} onChange={this.handleChange} type="text" name="search" placeholder="Search" className="mr-sm-2" />
          <Button onClick={this.onChangeSearch} variant="outline-info">Search</Button>
        </Form>
        <h1 className="align-self-center">Vídeos</h1>
        <Row>
          {this.state.videos !== undefined && this.state.videos.map(video => {
            return (
              <Col xs={12} sm={12} md={6} lg={4}>
                <VideoCard title={video.name}
                  text={video.description}
                  id={video._id}
                  history={this.props.history} />
              </Col>
            );
          })}
        </Row>
      </section>
    )
  }
}