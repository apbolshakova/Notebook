import React from 'react';
import Note from './Note.js'

export default class Content extends React.Component {
  render(props) {
    let dataArr = localStorage.getItem("dataArr"); //хранить в state?
    if (dataArr == null) dataArr = [];
    const noteArr = dataArr.map((noteData) => <Note data={noteData}/>);
    return (
      <div id="notesContainer" className='container notes-container'>
        {noteArr}
        <Note data='Не умри'/>
        <Note data='Научись в реакт' />
      </div>
    );
  }
  //методы здесь
}
