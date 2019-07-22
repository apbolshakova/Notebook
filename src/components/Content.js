import React from 'react';
import Note from './Note.js'

export default class Content extends React.Component {
  render(props) {
    let dataArr = ["Eat", "Sleep", "Code", "Repeat"];
    if (dataArr === null) dataArr = [];
    let noteArr = dataArr.map((noteData, index) => <Note data={noteData} key={index} />);
    return (
      <div id="notesContainer" className='container notes-container'>
        {noteArr}
      </div>
    );
  }
}
