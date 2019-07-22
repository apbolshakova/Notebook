import React from 'react';
import Header from './Header.js';
import Content from './Content.js';

export default class Notebook extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Content />
      </div>
    );
  }
}