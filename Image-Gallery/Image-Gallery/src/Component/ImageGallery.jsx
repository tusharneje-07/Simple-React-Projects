import React from "react";
import Masonry from "react-masonry-css";
import "./ImageGallery.css"; // For spacing

const ImageGallery = ({ imageUrls = [] }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGallery;
