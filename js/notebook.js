class Notebook {
  constructor() {
    localStorage.setItem("notesNum", 1); //TODO: delete testing values
    this.handleStoredNotes();
  }
  handleStoredNotes() {
    this.notesNum = localStorage.getItem("notesNum") || 0;
    if (this.notesNum < 0) {
      localStorage.setItem("notesNum", 0);
      this.notesNum = 0;
    }
    for (let i = 0; i < this.notesNum; i++) {
      let noteText = localStorage.getItem("note" + i);
      this.renderNote(i, noteText);
    }
  }
  renderNote(i, noteText) {
    let notesContainer = document.getElementById("notesContainer");
    let noteTemplate = document.getElementById("noteTemplate");
    
    let note = noteTemplate.cloneNode(true);
    note.classList.remove("invisible");
    note.id = "note" + i;
    let noteInput = note.getElementsByClassName("note-container__note-input");
    noteInput[0].value = noteText;
    noteInput[0].onchange = function() {
      localStorage.setItem(note.id, noteInput[0].value);
    };
    notesContainer.insertBefore(note, notesContainer.children[0]);
  }
}

export default Notebook;