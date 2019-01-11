import React from "react";

const Edit = props => {
  return (
    <div className="modal">
      <form
        className="modal-form"
        action={"/api/projects/edit=" + props.project._id}
        method="post"
      >
        <label>Site Name</label>
        <input
          name="siteName"
          type="text"
          autoComplete="off"
          value={props.project.siteName}
          onChange={props.editChange}
          required
        />
        <label>Image Base Name</label>
        <input
          name="imageBaseName"
          type="text"
          autoComplete="off"
          value={props.project.imageBaseName}
          onChange={props.editChange}
          required
        />
        <label>Tags</label>
        <input
          name="tags"
          type="text"
          autoComplete="off"
          value={props.project.tags}
          onChange={props.editChange}
          required
        />
        <label>URL</label>
        <input
          name="url"
          type="text"
          autoComplete="off"
          value={props.project.url}
          onChange={props.editChange}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          autoComplete="off"
          value={props.project.description}
          onChange={props.editChange}
          required
        />
        <input className="modal-form-btn" type="Submit" />
        <button
          id="close"
          className="modal-form-btn"
          onClick={props.modalControle}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Edit;
