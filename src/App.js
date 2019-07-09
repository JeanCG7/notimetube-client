import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import NavigationBar from './components/navigationBar'
import PrivateRoute from './components/privateRoute'

import RegisterPage from './scenes/register/register'
import LoginPage from './scenes/login/login'
import VideosFeedPage from './scenes/video/videoFeed'
import VideosUploadPage from './scenes/video/videoUpload'
import VideoPlayerPage from './scenes/video/videoPlayer'
require('dotenv').config()

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <PrivateRoute exact path="/" component={VideosFeedPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/videos/upload" component={VideosUploadPage} />
        <PrivateRoute path="/videos/:id" render={(props)=> <VideoPlayerPage id={props.match.params.id}/>} />
        <PrivateRoute path="/videos" component={VideosFeedPage} />
      </Switch>
    </div>
  );
}

export default App;
