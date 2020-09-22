import React, { Component } from 'react';
import './App.scss';
import { Avatar } from './components/Avatar';
import avatarSrc from './assets/avatar.jpg';
import { Title } from './components/Title';
import { Divider } from './components/Divider';

const title = 'Hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
        <Title title={title} description={description} />
        <Divider />
      </main>
    );
  }
}

export default App;
