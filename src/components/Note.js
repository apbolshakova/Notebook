import React from 'react';

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value || ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="notes-container_note">
        <div className="notes-container_note_header">
          <button type="button" className="btn btn-secondary notes-container_note_header__button float-right">Delete</button>
          <div className="clearfix"></div>
        </div>
        <div className="notes-container_note_content">
          <input type="text" className="form-control" value={this.state.value || ""} onChange={this.handleChange} />
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
