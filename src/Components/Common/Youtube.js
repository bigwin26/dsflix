import React from "react";

const Youtube = ({ src, title }) => {
  return (
    <iframe
      width="inherit"
      height="inherit"
      src={`https://www.youtube.com/embed/${src}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  );
};

export default Youtube;
