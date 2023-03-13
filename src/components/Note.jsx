import React, {useState} from "react";

function Note(props){
    const colorsArray = ["#fd9a71", "#fec870", "#e3ed8d", "#987ad1", "#8DCBE6"];
    var colorIndex = Math.floor(Math.random() * 5);
  return (
    <div className="note" style={{backgroundColor: colorsArray[colorIndex]}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.deleteData(props.id);
      }} >Delete</button>
    </div>
  );
}
export default Note;