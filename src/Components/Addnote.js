import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "",
    description: "",
    tag: "",});
    props.showAlert("Updated Successfully", "success")
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    // setTitle(e.target.value)
  };

  return (
    <div>
      <div className="p-3 ">
        <h1>ADD A NOTE</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="title"
              aria-describedby="emailHelp"
              value = {note.title}
              onChange={handleChange}  
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="description"
              aria-describedby="emailHelp"
              value = {note.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby="emailHelp"
              value = {note.tag}
              onChange={handleChange} 
            />
          </div>
          <button
            disabled ={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick} 
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
