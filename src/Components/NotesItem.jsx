import React from "react";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3 ms-2">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio aliquam fugiat atque hic temporibus voluptatem tempore perspiciatis. Exercitationem ipsa itaque fugit quos amet iure cumque facere possimus laudantium maxime.</p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
