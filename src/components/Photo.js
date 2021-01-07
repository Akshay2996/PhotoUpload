import React from "react";

function Photo(props) {
    const post = props.post;
    return (
      <div className="photo-grid">
        <figure className="figure">
          <img className="photo" src={post.imageLink} alt={post.description} />
          <figcaption>
            <p>{post.description}</p>
          </figcaption>
          <div className="button-container">
            <button onClick={() => {
                props.onRemovePhoto(post.id)
            }} className="remove-button">Remove</button>
          </div>
        </figure>
      </div>
    );
  }

export default Photo;
