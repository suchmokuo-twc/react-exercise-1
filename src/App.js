import React, { Component } from 'react';
import './App.scss';
import { Avatar } from './components/Avatar';
import avatarSrc from './assets/avatar.jpg';
import { Title } from './components/Title';
import { Divider } from './components/Divider';
import { Section } from './components/Section';

const title = 'Hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
        <Title title={title} description={description} />

        <Divider />

        <Section title="About me">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aut placeat quam deserunt, pariatur nam ad commodi modi voluptas quo
            ratione quia molestias nesciunt debitis ab quae. Sit, reprehenderit
            aliquam.
          </p>
        </Section>

        <Section title="Education"></Section>
      </main>
    );
  }
}

export default App;
