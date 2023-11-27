import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

//updatenote kyu context api k tarah pass nai hua

const NotesItem = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updateNote } = props; 


  return (
    <div className="col-md-3">
      <div className="card my-3 ms-2">
        <div className="card-body">
          <div className="d-flex">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-pen-to-square mx-3 align-items-center" onClick={()=>{updateNote(note)}}></i>
          <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id);props.showAlert("Deleted Successfully", "success")}}></i>
          </div>
          <p className="card-text">{note.description} </p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
