import React from "react";

const ImageGallery = ({ imageUrls = [] }) => {
  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 ">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
