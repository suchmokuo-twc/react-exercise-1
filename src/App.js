import React, { Component } from 'react';
import './App.scss';
import { Avatar } from './components/Avatar';
import avatarSrc from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
      </main>
    );
  }
}

export default App;
