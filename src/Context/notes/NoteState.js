import React, { useState } from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";





const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial =[];
  const [notes, setNotes] = useState(notesInitial);

  //Get all note
  const getnote =  async () => {

    // fetch - inbuilt method for api calls

    // fetch takes 2 arguments
    // 1. api endpoint
    // 2. configuration

    // method - POST, GET, PUT, DELETE

    // authorization token is used for authorization of user

    // //In Axios
    // const {body} = await axios.get(`${host}/api/notes/fetchallnotes`, {
    //   headers : {
    //     "auth-token":
    //    localStorage.getItem('token'),
    //   }    })

    //   setNotes(body)

    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },

    });
    console.log({response});
    const json = await response.json();
    setNotes(json)
  }; 




  //sending data to backend, so we use POST request
  //content-type : type of data we are sending

  // multipart/form-data



  //Add a note
  const addnote = async (title, description, tag) => {
    //TODO: API Call
    //API CALL
    const response = await fetch(` ${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
  
    const note = await response.json();
    setNotes(notes.concat(note));
  
  };

  //Delete a note
  const deletenote = async (id) => {
    //API Call
    const response = await fetch(` ${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
     
    });
    const json = await response.json();
    console.log(json)


    console.log("Deleteing the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editnote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(` ${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);


    let newNotes = JSON.parse(JSON.stringify(notes))
    console.log({notes})
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addnote, deletenote, editnote, getnote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
