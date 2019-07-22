import React from 'react';
import Note from './Note.js'

export default class Content extends React.Component {
  render(props) {
    dataArr = ["Eat", "Sleep", "Code", "Repeat"];
    if (dataArr === null) dataArr = [];
    let noteArr = dataArr.map((noteData) => <Note data={noteData}/>);
    return (
      <div id="notesContainer" className='container notes-container'>
        {noteArr}
      </div>
    );
  }
}
