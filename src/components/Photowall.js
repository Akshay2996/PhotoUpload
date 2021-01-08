import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto"></Link>
      <div className="photo-grid">
        {props.posts
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .map((post) => (
            <Photo
              key={post.id}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
