import React from "react";

const Btn = ({ title, styles, imgStyle, image, image2 }) => {
  return (
    <button style={styles}>
      <img src={image} style={imgStyle} alt="icon" />
      {image2 && <img src={image} style={imgStyle} alt="icon" />}
      {title}
    </button>
  );
};

export default Btn;
