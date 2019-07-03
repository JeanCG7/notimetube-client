import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import NavigationBar from './components/navigationBar'

import RegisterPage from './scenes/register/register'
import LoginPage from './scenes/login/login'
import VideosFeedPage from './scenes/video/videoFeed'
import VideosUploadPage from './scenes/video/videoUpload'
import VideoPlayerPage from './scenes/video/videoPlayer'

function App() {
  const videos = [
    {
      "name": "Patrica Cain",
      "description": "Nisi exercitation fugiat eiusmod sint non occaecat cupidatat ad proident. Exercitation exercitation officia commodo quis ex incididunt ea laboris dolore id non. Officia ipsum aliquip veniam dolore. Minim proident deserunt deserunt minim est labore officia anim pariatur fugiat Lorem voluptate voluptate consectetur. Proident quis consequat excepteur excepteur mollit. Ea laboris aliqua anim voluptate commodo mollit laboris.\r\n"
    },
    {
      "name": "England Nicholson",
      "description": "Do duis irure amet proident deserunt labore adipisicing. In consequat minim non id. Mollit aute consectetur deserunt exercitation pariatur fugiat minim deserunt. Nostrud laborum eiusmod pariatur amet aute. Qui eu cillum sint minim do esse excepteur qui et eu eu non ad. Culpa aliquip voluptate quis laboris aliqua laborum ullamco. In ipsum dolor quis velit non qui ea nostrud.\r\n"
    },
    {
      "name": "Lewis Frazier",
      "description": "Duis pariatur nulla magna qui. Sit labore pariatur elit aliqua culpa sint duis fugiat magna officia fugiat aliqua eiusmod laboris. Amet excepteur duis mollit Lorem excepteur est.\r\n"
    },
    {
      "name": "George Walton",
      "description": "Ad magna velit enim est ex sint ut ex. Elit cillum non culpa non cupidatat pariatur consectetur do proident velit. Fugiat anim fugiat ut minim non qui elit. Velit qui sit dolore nostrud adipisicing aliqua aliquip ut cupidatat nisi. Pariatur ipsum aliquip aliqua eu fugiat laborum eiusmod aliquip laborum do duis.\r\n"
    },
    {
      "name": "Marla Blevins",
      "description": "Eiusmod eu amet ad ad occaecat. Id esse sint mollit aute incididunt minim sunt dolor irure anim excepteur. Elit esse proident est ipsum. Fugiat ullamco eu elit minim do quis labore voluptate deserunt culpa. Enim voluptate id ullamco fugiat nulla minim. Ad esse commodo minim dolor ut nisi consectetur pariatur. Magna exercitation sint aliqua ut sunt tempor incididunt aliquip dolore aute ullamco anim laborum.\r\n"
    },
    {
      "name": "Marjorie Vaughan",
      "description": "Sunt dolor do ipsum sunt. Elit labore enim aliquip non. Enim nostrud dolor elit irure. Qui voluptate quis quis culpa. Fugiat cillum non cillum dolore anim irure cillum reprehenderit pariatur velit anim duis irure. Deserunt voluptate id consectetur Lorem amet est non.\r\n"
    },
    {
      "name": "Conway Vance",
      "description": "Dolor do sint ex irure qui anim do sint ex laboris ex est nisi labore. Irure in consectetur aliquip nostrud aliquip duis. Aliquip ut labore commodo amet duis eu fugiat eiusmod elit et nostrud tempor excepteur proident. Eu reprehenderit sunt nostrud elit laborum cupidatat ea.\r\n"
    },
    {
      "name": "Little Black",
      "description": "Aute Lorem esse dolore cillum labore occaecat cupidatat. Ea amet irure pariatur dolore aliquip culpa eu fugiat consequat. Veniam elit proident sint sint sunt aliqua cillum. Non commodo cillum exercitation sint dolor quis sunt magna est eu culpa non sint. Qui ipsum veniam laborum mollit proident sint esse sunt dolore nisi labore enim.\r\n"
    },
    {
      "name": "Barnes Stark",
      "description": "Nostrud proident fugiat deserunt id cillum cillum pariatur fugiat ex. Et ad adipisicing consectetur ut sint deserunt. Eiusmod dolore sint elit dolore ipsum. Cupidatat commodo enim consectetur irure dolore non reprehenderit consectetur Lorem consequat reprehenderit sunt officia. Cillum nostrud ex ex occaecat sint sint aliqua. Aliquip elit officia in sint.\r\n"
    },
    {
      "name": "Bird Rodgers",
      "description": "Anim Lorem pariatur anim eu ut magna ea ut Lorem. Do id proident officia consequat culpa do aliquip duis dolor irure sint aliquip consequat. Quis ipsum eiusmod nisi excepteur sit do. Amet tempor nisi irure ex in id proident incididunt nulla quis pariatur amet veniam exercitation. Reprehenderit labore nulla magna commodo. Aliquip ea ad officia nisi. Excepteur magna ullamco pariatur tempor.\r\n"
    },
    {
      "name": "Concepcion Williams",
      "description": "Proident ipsum sunt eu amet ex. Eu eiusmod esse incididunt sint elit est labore laboris. Enim veniam cupidatat laborum ut anim cillum elit et quis mollit officia nisi veniam.\r\n"
    },
    {
      "name": "Debora Cortez",
      "description": "Commodo velit exercitation officia ad minim ex minim consectetur minim non ad consequat magna. Labore proident nulla sint fugiat do minim. Aute proident cupidatat exercitation cupidatat eiusmod ad ipsum ea nisi.\r\n"
    }
  ];
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/videos/upload" component={VideosUploadPage} />
        <Route path="/videos/:id" render={(props)=> <VideoPlayerPage id={props.match.params.id}/>} />
        <Route path="/videos" component={() => <VideosFeedPage videos={videos}/>} />
      </Switch>
    </div>
  );
}

export default App;
