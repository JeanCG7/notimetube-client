import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import NavigationBar from './components/navigationBar'
import PrivateRoute from './components/privateRoute'

import RegisterPage from './scenes/register/register'
import LoginPage from './scenes/login/login'
import VideosFeedPage from './scenes/video/videoFeed'
import VideosUploadPage from './scenes/video/videoUpload'
import VideoPlayerPage from './scenes/video/videoPlayer'
import { authService } from './services/auth';
require('dotenv').config()

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTokenValid: authService.isTokenValid(),
      search: ''
    }
  }

  logout = (e) => {
    this.setState({ isTokenValid: false });
  }

  login = (e) => {
    this.setState({ isTokenValid: true });
  }

  onChangeSearchInput(search) {
    this.setState({
      search: search
    });
  }

  render = () => {
    return (
      <div>
        <NavigationBar onClickLogout={this.logout} isTokenValid={this.state.isTokenValid} changeSearch={this.onChangeSearchInput.bind(this)} />
        <Switch>
          <PrivateRoute exact path="/" component={VideosFeedPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" render={(props) => <LoginPage onClickLogin={this.login} />} />
          <PrivateRoute path="/videos/upload" component={VideosUploadPage} />
          <PrivateRoute path="/videos/:id" render={(props) => <VideoPlayerPage id={props.match.params.id} />} />
          <PrivateRoute path="/videos" component={VideosFeedPage} />
        </Switch>
      </div>
    );
  }
}