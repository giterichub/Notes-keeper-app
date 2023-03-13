import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App(){

  const [items, setItems] = useState([]);

  function addItem(obj){
    console.log(obj);
    setItems((prevItems)=>{
      return [...prevItems, obj];
    });
  }
  function deleteData(id){
    setItems((prevItems)=>{
      return prevItems.filter((pItem, index)=> {
        return index !== id;
      });
    });
  }
  return <div id="root">
  {/* <Header /> */}
  <CreateArea addNewNote={addItem} />
  {items.map((eachItem, index)=>(
    <Note key={index} id={index} deleteData={deleteData} title={eachItem.noteTitle} content={eachItem.textTitle} />
  ))}
  
  <Footer /></div>;
}

export default App;