import React, { useState } from "react";
import "./images.css";

const ImagesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center">
      <nav className="bg-gray-200 w-full py-4 flex justify-between items-center px-8 shadow-md">
        <div className="flex space-x-4">
          <button className="text-gray-700 font-semibold">Home</button>
          <button className="text-gray-700 font-semibold">Audio</button>
          <button className="text-gray-700 font-semibold">Video</button>
          <button className="text-gray-700 font-semibold">Journal</button>
        </div>
        <button className="text-gray-700 font-semibold">Log out</button>
      </nav>
      {!selectedImage ? (
        <>
          <h1 className="choose-image">Choose Your Image</h1>
          <div className="image-buttons">
            <button
              onClick={() =>
                handleImageClick(
                  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                )
              }
              className="image-1"
            ></button>
            <button
              onClick={() => handleImageClick("path/to/image2.jpg")}
              className="image-2"
            ></button>
            <button
              onClick={() => handleImageClick("path/to/image3.jpg")}
              className="image-3"
            ></button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <img
            src={selectedImage}
            alt="Selected Meditation Image"
            className="w-full h-full object-cover"
            onClick={() => setSelectedImage(null)}
          />
          <button
            className="absolute top-4 right-4 bg-white text-gray-700 px-4 py-2 rounded-md shadow-md"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImagesPage;
