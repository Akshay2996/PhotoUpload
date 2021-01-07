import React from "react";
import Photo from './Photo';

function Photowall(props) {
    return (
      <div>
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    );
}

export default Photowall;
