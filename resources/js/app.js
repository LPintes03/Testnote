let addButton = document.getElementById("addbox");
let row = document.getElementById("row");
addButton.addEventListener("click", createNote);

function createNote() {
  let notes = localStorage.getItem("notes");
  let noteHeading = "Note Heading";
  let noteText = "Note text";
  if (notes == null || notes == "" || notes.length === 0) {
    notesObj = [];
    let htmlCode = `<div class="col-4 col-sm-12 col-md-4">
    <div class="notebox">
      <div class="notedatecontainer"><h6>6 June</h6></div>
      <textarea class="form-control noteheading" maxlength="25">
${noteHeading}</textarea
      >
      <div class="notecontainer">
        <textarea class="notedata form-control" style="height: 190px">
${noteText}</textarea
        >
      </div>
      <div class="noteaction">
        <i class="fa fa-floppy-o savebutton" id="savebtn"></i
        ><i class="fa fa-trash deletebutton" id="deletebtn"></i>
      </div>
    </div>
  </div>`;
    row.innerHTML += htmlCode;
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = JSON.parse(localStorage.getItem("notes"));
  myObj = {
    title: noteHeading,
    text: noteText,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}