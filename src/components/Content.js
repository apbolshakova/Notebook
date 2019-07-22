import React from 'react';
import Note from './Note.js'

export default class Content extends React.Component {
  render() {
    return (
      <div class='container notes-container'>
        <Note data='Купи хлеб' />
        <Note data='Не умри'/>
        <Note data='Научись в реакт' />
      </div>
    );
  }
  //методы здесь
}