import React, { Component } from 'react';
import { VerticalBox } from '@xinghunm/widgets';
import Cookies from './Cookies';
import SessionStorage from './SessionStorage';
import LocalStorage from './LocalStorage';

class App extends Component {
  render() {
    return (
      <VerticalBox>
        <Cookies />
        <SessionStorage />
        <LocalStorage />
      </VerticalBox>
    );
  }
}

export default App;
