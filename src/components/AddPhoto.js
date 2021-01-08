import React from "react";

export default function AddPhoto(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      props.onAddPhoto(post);
    }
  };
  return (
    <div>
      <h1>Photowall</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Link" name="link"></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
          ></input>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}
