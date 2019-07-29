class Note {
  constructor(i) {
    this.getAsNode = this.getAsNode.bind(this);
    this.initValue = this.initValue.bind(this);
    this.renderAtBeginning = this.renderAtBeginning.bind(this);
    this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
    
    this.index = i;
    this.DOMParent = document.getElementById("notesContainer");
    this.asNode = this.getAsNode();
    this.inputNode = this.asNode.getElementsByClassName("note-container__note-input")[0];
    this.initValue();
  }
  getAsNode() {
    const asNode = document.getElementById("noteTemplate").cloneNode(true);
    asNode.classList.remove("invisible");
    asNode.id = "note" + this.index;
    return asNode;
  }
  initValue() {
    this.inputNode.value = localStorage.getItem("note" + this.index) || "New note! (click to edit)";
  }
  renderAtBeginning() {
    this.DOMParent.insertBefore(this.asNode, this.DOMParent.children[0]);
  }
  saveInLocalStorage() {
    localStorage.setItem(this.asNode.id, this.inputNode.value);
  }
}
export default Note;
