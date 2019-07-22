import React from "react";
import {Note} from "./Note.js"

export class Header extends React.Component {
  handleClick() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.appendChild(<Note value="Новая заметка" />); //ошибка
  }
  render() {
    return (
      <div className="container header">
        <button type="button" onClick={this.handleClick} className="btn btn-primary float-left header__button">+</button>
        <div className="clearfix"></div>
      </div>
    );
  }
}
