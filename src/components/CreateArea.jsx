import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [textAreaSmall, setTextAreaBig] = useState(false);

  function handleNoteTitleChange(e) {
    const noteTitleValue = e.target.value;
    setNoteTitle(noteTitleValue);
  }

  function handleNoteTextChange(e) {
    const noteTextValue = e.target.value;
    setTextTitle(noteTextValue);
  }
  function expandArea(){
    setTextAreaBig(!textAreaSmall);
  }
  function collapseArea(event){
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (textAreaSmall) {
        setTextAreaBig(false);
      }
    }
  }

  return (
    <div>
      <form className="create-note">
      <div onBlur={collapseArea}>
        <input hidden={textAreaSmall ? false : true } onChange={handleNoteTitleChange} name="title" placeholder="Title" value={noteTitle} />
        <textarea onClick={expandArea} onChange={handleNoteTextChange} name="content" placeholder="Take a note..." rows={textAreaSmall ? "3" : "1"} value={textTitle}/>
      </div>  
        <button onClick={(evt) => {
            props.addNewNote({ noteTitle, textTitle });
            evt.preventDefault();
            setNoteTitle("");
            setTextTitle("");
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
