import Note from "./note.js";

class Notebook {
  constructor() {
    this.loadNotebook = this.loadNotebook.bind(this);
    this.getStoredNotesNum = this.getStoredNotesNum.bind(this);
    this.getStoredNotesAsArr = this.getStoredNotesAsArr.bind(this);
    this.renderAllNotesFromArr = this.renderAllNotesFromArr.bind(this);
    this.initNotebookSavingEvent = this.initNotebookSavingEvent.bind(this);
    this.saveNotebook = this.saveNotebook.bind(this);
    this.initCreatingBtnHandler = this.initCreatingBtnHandler.bind(this);
    
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
    let notesNum = +localStorage.getItem("notesNum") || 0;
    if (notesNum <= 0) {
      localStorage.setItem("notesNum", 0);
      notesNum = 0;
    }
    return notesNum;
  }
  getStoredNotesAsArr() {
    const notesArr = [];
    for (let i = 0; i < this.notesNum; i++) {
      notesArr[i] = new Note(i);
      notesArr[i].inputNode.onchange = this.saveNotebook; //TODO: delete when saving event is repaired
    }
    return notesArr;
  }
  renderAllNotesFromArr() {
    for (let i = 0; i < this.notesNum; i++) {
      this.notesArr[i].renderAtBeginning();
    }
  }
  initNotebookSavingEvent() {
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
      this.notesArr[this.notesNum].inputNode.onchange = this.saveNotebook; //TODO: delete when saving event is repaired
      this.notesArr[this.notesNum].renderAtBeginning();
      this.notesNum++; 
      this.saveNotebook(); //TODO: delete when saving event is repaired
    }
  }
}
export default Notebook;
