import Note from "./note.js"

class Notebook {
  constructor() {
    this.loadNotebook();
  }
  loadNotebook() {
    this.notesNum = this.getStoredNotesNum();
    this.notesArr = this.getStoredNotesAsArr();
    this.renderAllNotesFromArr();
    this.initNotebookSavingEvent();
    this.initCreatingBtnHandler();
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
    localStorage.setItem("notesNum", this.notesNum);
    for (let i = 0; i < this.notesNum; i++) {
      this.notesArr[i].saveInLocalStorage();
    }
  }
  initCreatingBtnHandler() {
    const btn = document.getElementById("noteCreatingBtn");
    btn.onclick = () => {
      this.notesArr[this.notesNum] = new Note(this.notesNum);
      this.notesArr[this.notesNum].renderAtBeginning();
      this.notesNum++;
      this.saveNotebook.bind(this); //TODO: delete when
      this.saveNotebook();          //saving event is repaired
    }
  }
}
export default Notebook;
