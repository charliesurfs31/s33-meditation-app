import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./images.css";

const ImagesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="buttons">
      <nav className="navigation">
        <div className="nav-buttons">
          <Link to="/welcome" className="nav-button">
            Home
          </Link>
          <Link to="/audio" className="nav-button">
            Audio
          </Link>
          <Link to="/images" className="nav-button">
            Images
          </Link>
        </div>
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
              onClick={() =>
                handleImageClick(
                  "https://cdn.pixabay.com/photo/2017/09/11/00/18/beach-2737460_960_720.jpg"
                )
              }
              className="image-2"
            ></button>
            <button
              onClick={() =>
                handleImageClick(
                  "https://img.freepik.com/free-photo/lush-grass-ripe-wheat-natural-setting_60438-3615.jpg"
                )
              }
              className="image-3"
            ></button>
          </div>
        </>
      ) : (
        <div className="selected-image-container">
          <img
            src={selectedImage}
            alt="Selected Meditation Image"
            className="selected-image"
            onClick={() => setSelectedImage(null)}
          />
          <button
            className="close-button"
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
