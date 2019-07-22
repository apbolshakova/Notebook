import React from 'react';

export default class Note extends React.Component {
  render() {
    return (
      <div className="notes-container_note">
        <div className="notes-container_note_header">
          <button type='button' className='btn btn-secondary notes-container_note_header__button float-right'>Delete</button>
          <div className="clearfix"></div>
        </div>
        <div className="notes-container_note_content">
          <input type="text" className="form-control" value={this.props.data} />
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
