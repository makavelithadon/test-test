import React, { Component } from 'react';
import logo from './logo.svg';
import { Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Menu
        items={[
          'Mes recettes',
          'Mes ingrédients',
          'ererere'
        ]}
        className="App-header"
      ></Menu>
    );
  }
}

export default App;
