import Note from "./note.js"

class Notebook {
  constructor() {
    localStorage.setItem("notesNum", 1); //TODO: delete testing values
    this.notesNum = this.getStoredNotesNum();
    this.notesArr = this.getStoredNotesAsArr();
    this.loadNotebook();
    this.initNotebookSavingEvent();
  }
  getStoredNotesNum() {
    let notesNum = localStorage.getItem("notesNum") || 0;
    if (notesNum < 0) {
      localStorage.setItem("notesNum", 0);
      notesNum = 0;
    }
    return notesNum;
  }
  getStoredNotesAsArr() {
    const notesArr = [];
    for (let i = 0; i < this.notesNum; i++) {
      notesArr[i] = new Note(i);
    }
    return notesArr;
  }
  loadNotebook() {
    this.renderAllNotesFromArr();
  }
  renderAllNotesFromArr() {
    for (let i = 0; i < this.notesNum; i++) {
      this.notesArr[i].renderAtBeginning();
    }
  }
  initNotebookSavingEvent() {
    this.saveNotebook.bind(this);
    document.addEventListener("onbeforeunload", this.saveNotebook); //TODO: repair (not working)
  }
  saveNotebook() {
    for (let i = 0; i < this.notesNum; i++) {
      this.notesArr[i].saveInLocalStorage();
    }
  }
}
export default Notebook;
