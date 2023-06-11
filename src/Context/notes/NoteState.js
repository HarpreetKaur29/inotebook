import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) =>{

   const notesInitial =[
      {
        "_id": "6432dae7a0e322d8db670908",
        "user": "642c855d44e68217181ff702",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "personal",
        "createdAt": "2023-04-09T15:33:59.802Z",
        "updatedAt": "2023-04-09T15:33:59.802Z",
        "__v": 0
      },
      {
        "_id": "6432dd44555f92ec4aa521c0",
        "user": "642c855d44e68217181ff702",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "personal",
        "createdAt": "2023-04-09T15:44:04.902Z",
        "updatedAt": "2023-04-09T15:44:04.902Z",
        "__v": 0
      },
      {
        "_id": "64343ed58acb2069242a146a",
        "user": "642c855d44e68217181ff702",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "personal",
        "createdAt": "2023-04-10T16:52:37.585Z",
        "updatedAt": "2023-04-10T16:52:37.585Z",
        "__v": 0
      },
      {
        "_id": "643453856246aa7ce22f93c4",
        "user": "642c855d44e68217181ff702",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "personal",
        "createdAt": "2023-04-10T18:20:53.105Z",
        "updatedAt": "2023-04-10T18:20:53.105Z",
        "__v": 0
      },
      {
         "_id": "64343ed58acb2069242a146a",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T16:52:37.585Z",
         "updatedAt": "2023-04-10T16:52:37.585Z",
         "__v": 0
       },
       {
         "_id": "643453856246aa7ce22f93c4",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T18:20:53.105Z",
         "updatedAt": "2023-04-10T18:20:53.105Z",
         "__v": 0
       },
       {
         "_id": "64343ed58acb2069242a146a",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T16:52:37.585Z",
         "updatedAt": "2023-04-10T16:52:37.585Z",
         "__v": 0
       },
       {
         "_id": "643453856246aa7ce22f93c4",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T18:20:53.105Z",
         "updatedAt": "2023-04-10T18:20:53.105Z",
         "__v": 0
       },
       {
         "_id": "64343ed58acb2069242a146a",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T16:52:37.585Z",
         "updatedAt": "2023-04-10T16:52:37.585Z",
         "__v": 0
       },
       {
         "_id": "643453856246aa7ce22f93c4",
         "user": "642c855d44e68217181ff702",
         "title": "My title",
         "description": "Please wake up early",
         "tag": "personal",
         "createdAt": "2023-04-10T18:20:53.105Z",
         "updatedAt": "2023-04-10T18:20:53.105Z",
         "__v": 0
       }
    ] 

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}> 
           {props.children}
        </NoteContext.Provider>
     )
}

export default NoteState