import React from 'react';

export default class Note extends React.Component {
  render() {
    return (
      <div class="notes-container_note">
        <div class="notes-container_note_header">
          <button type='button' class='btn btn-secondary notes-container_note_header__button float-right'>Delete</button>
          <div class="clearfix"></div>
        </div>
        <div class="notes-container_note_content">
          <input type="text" class="form-control" value={this.props.data} />
        </div>
        <div class="clearfix"></div>
      </div>
            );
  }
}